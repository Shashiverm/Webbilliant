'use server'

import prisma from '@/lib/db'

export async function submitContact(prevState: { message: string, success?: boolean }, formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: 'Please fill in all fields'
      }
    }

    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message
      }
    });

    return {
      success: true,
      message: 'Message sent successfully!'
    }

  } catch (error) {
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    }
  }
}

