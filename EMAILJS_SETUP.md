# EmailJS Setup Guide for KeNaAI Contact Form

## Overview
The contact form is configured to send emails to `sharmanirali1103@gmail.com` using EmailJS, a free email service that works directly from the browser without needing a backend server.

---

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Sign up using your Google account or email

### 2. Add Email Service
1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (recommended)
4. Click **Connect Account** and authorize with `sharmanirali1103@gmail.com`
5. Give it a Service ID (e.g., `service_kenai`)
6. Click **Create Service**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Set Template ID: `template_kenai`
4. Configure the template:

**Template Settings:**
- **To Email**: `{{to_email}}` (will be sharmanirali1103@gmail.com)
- **From Name**: `{{from_name}}`
- **From Email**: `{{from_email}}`
- **Subject**: `New Inquiry: {{inquiry_type}} - {{from_name}}`

**Email Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
  <h2 style="color: #ED6042; border-bottom: 2px solid #ED6042; padding-bottom: 10px;">
    New KeNaAI Inquiry
  </h2>
  
  <div style="margin: 20px 0;">
    <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
  </div>
  
  <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
    <p>This email was sent from the KeNaAI investor website contact form.</p>
  </div>
</div>
```

5. Click **Save**

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (looks like: `AbCdEfGhIjKlMnOp`)

### 5. Update the Code
1. Open `src/components/ContactForm/ContactForm.jsx`
2. Find this line (around line 30):
   ```javascript
   user_id: 'YOUR_EMAILJS_PUBLIC_KEY', // Replace with your EmailJS public key
   ```
3. Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key:
   ```javascript
   user_id: 'AbCdEfGhIjKlMnOp', // Your actual EmailJS public key
   ```

### 6. Verify Service and Template IDs
In the same file, verify these match your EmailJS setup:
```javascript
service_id: 'service_kenai',  // Must match your Service ID
template_id: 'template_kenai', // Must match your Template ID
```

---

## Testing the Form

### Local Testing:
1. Start the dev server: `npm run dev`
2. Open `http://localhost:3000`
3. Scroll to the contact form
4. Fill out all required fields
5. Click "Submit Inquiry"
6. Check `sharmanirali1103@gmail.com` for the test email

### What to Test:
✅ Form submits successfully
✅ Success message appears
✅ Email received at `sharmanirali1103@gmail.com`
✅ All form fields appear in the email
✅ Error message shows if submission fails

---

## Alternative: FormSubmit (No Account Needed)

If you prefer not to use EmailJS, here's a simpler alternative using FormSubmit:

### Update ContactForm.jsx:
Replace the `handleSubmit` function with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('_subject', `New KeNaAI Inquiry: ${formData.inquiryType}`);
    formDataToSend.append('inquiry_type', formData.inquiryType);
    formDataToSend.append('message', formData.message);

    const response = await fetch('https://formsubmit.co/sharmanirali1103@gmail.com', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: 'Investment Discussion',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus(null), 5000);
  } finally {
    setIsSubmitting(false);
  }
};
```

**Note**: FormSubmit will send a confirmation email to `sharmanirali1103@gmail.com` on first use. Click the confirmation link to activate.

---

## Troubleshooting

### Emails Not Received:
1. Check spam/junk folder
2. Verify EmailJS Public Key is correct
3. Check browser console for errors (F12)
4. Ensure Service ID and Template ID match exactly
5. Check EmailJS dashboard for delivery status

### CORS Errors:
- EmailJS handles CORS automatically
- If using FormSubmit, it also handles CORS
- No additional configuration needed

### Rate Limits:
- Free EmailJS: 200 emails/month
- Upgrade if you need more

---

## Production Deployment

### Before Deploying:
1. ✅ EmailJS account set up
2. ✅ Public key added to code
3. ✅ Form tested locally
4. ✅ Email received successfully

### Environment Variables (Optional):
For better security, you can use environment variables:

1. Create `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=service_kenai
   VITE_EMAILJS_TEMPLATE_ID=template_kenai
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. Update code to use:
   ```javascript
   service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
   template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
   user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
   ```

3. Add `.env` to `.gitignore`

---

## Cost Information

**EmailJS Free Tier:**
- 200 emails/month
- 2 email services
- 2 email templates
- Email history for 30 days

**Paid Plans (if needed):**
- Personal: $7/month (1000 emails)
- Professional: $15/month (5000 emails)

For an investor website with limited traffic, the free tier should be sufficient.

---

## Support

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **FormSubmit Documentation**: https://formsubmit.co/
- **Contact Form Location**: `src/components/ContactForm/ContactForm.jsx`
