from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class AppointmentCreate(BaseModel):
    patient_name: str = Field(min_length=2, max_length=120)
    mobile: str = Field(min_length=8, max_length=20)
    email: Optional[EmailStr] = None
    location: Optional[str] = None
    service: Optional[str] = None
    preferred_date: Optional[str] = None
    preferred_slot: Optional[str] = None
    message: Optional[str] = None


class Appointment(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    patient_name: str
    mobile: str
    email: Optional[str] = None
    location: Optional[str] = None
    service: Optional[str] = None
    preferred_date: Optional[str] = None
    preferred_slot: Optional[str] = None
    message: Optional[str] = None
    status: str = "new"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Doconnect API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/appointments", response_model=Appointment)
async def create_appointment(input: AppointmentCreate):
    appt = Appointment(**input.model_dump())
    await db.appointments.insert_one(appt.model_dump())
    return appt


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
