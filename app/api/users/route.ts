import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.model";
import bcryptjs from "bcryptjs";

import { connectToDB } from "@/config/dbConn";

connectToDB();
