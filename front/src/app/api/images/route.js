// app/api/images/route.js
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function GET() {
  try {
    const { resources } = await cloudinary.api.resources({
      type: "upload",
      prefix: "hot-solutions/",
      max_results: 100,
    });

    const urls = resources.map((file) => file.secure_url);

    return NextResponse.json({ images: urls });
  } catch (err) {
    return NextResponse.json(
      { error: "Не удалось получить изображения", details: err.message },
      { status: 500 }
    );
  }
}
