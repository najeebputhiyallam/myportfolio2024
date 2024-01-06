import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const message = searchParams.get('message');

  try {
    if (!name || !email || !message) throw new Error('Name, Email and Message required');
    await sql`INSERT INTO contact (Name, Email, Message) VALUES (${name}, ${email}, ${message});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const contactDB = await sql`SELECT * FROM contact;`;
  return NextResponse.json({ contactDB }, { status: 200 });
}