import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.projectType || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Create transporter for Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email to business owner
      const mailToOwner = {
        from: process.env.EMAIL_USER,
        to: 'slkeyproduction@gmail.com',
        subject: `New Inquiry from ${body.name} - Key Production`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #5CB027, #7ED348); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Contact Inquiry</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
              <h2 style="color: #333;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${body.email}">${body.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.phone || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.company || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.projectType}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${body.budget || 'Not specified'}</td>
                </tr>
              </table>
              <h3 style="color: #333; margin-top: 20px;">Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #5CB027;">
                ${body.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px;">
              <p>Key Production - Capturing Moments, Creating Memories</p>
              <p>Maharagama, Sri Lanka | +94 76 923 8423</p>
            </div>
          </div>
        `,
      };

      // Auto-reply to customer
      const mailToCustomer = {
        from: process.env.EMAIL_USER,
        to: body.email,
        subject: `Thank you for contacting Key Production!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #5CB027, #7ED348); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You, ${body.name}!</h1>
            </div>
            <div style="padding: 30px; background: #f9f9f9;">
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                Thank you for reaching out to Key Production! We've received your inquiry and our team will get back to you within 24 hours.
              </p>
              <p style="font-size: 16px; line-height: 1.6; color: #333;">
                In the meantime, feel free to browse our portfolio and explore our previous work.
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://keyproduction.lk/gallery" style="background: #5CB027; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">View Our Portfolio</a>
              </div>
              <h3 style="color: #333;">Your Message:</h3>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #5CB027; font-style: italic;">
                ${body.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="background: #333; color: white; padding: 20px; text-align: center;">
              <p style="margin: 0 0 10px 0; font-weight: bold;">Key Production</p>
              <p style="margin: 0 0 5px 0; font-size: 14px;">📍 70A, Yahampath Mawatha, Maharagama, Sri Lanka</p>
              <p style="margin: 0 0 5px 0; font-size: 14px;">📞 +94 76 923 8423</p>
              <p style="margin: 0; font-size: 14px;">📧 slkeyproduction@gmail.com</p>
            </div>
          </div>
        `,
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(mailToOwner),
        transporter.sendMail(mailToCustomer),
      ]);
    } else {
      // Log the submission if email is not configured
      console.log('New contact form submission:', {
        name: body.name,
        email: body.email,
        phone: body.phone || 'Not provided',
        company: body.company || 'Not provided',
        projectType: body.projectType,
        budget: body.budget || 'Not specified',
        message: body.message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
