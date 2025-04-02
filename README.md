# TraceIT - CFIA Compliance Made Simple

TraceIT is a web application designed to help Canadian food businesses meet CFIA (Canadian Food Inspection Agency) traceability requirements. Developed from real-world experience with a small freeze-dried food business, TraceIT provides an affordable, easy-to-use solution for food traceability compliance.

## About TraceIT

TraceIT was built specifically to address the challenges faced by small and medium-sized food businesses in Canada when complying with the Safe Food for Canadians Regulations (SFCR). Our solution focuses on:

- One-step-back, one-step-forward traceability requirements
- Food product identification
- Record keeping for CFIA compliance
- Audit-ready reporting

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com)

## Project Structure

```
/src
  /app                    # Next.js App Router
    /about                # About page
    /benefits             # Benefits page
    /blog                 # Blog pages
    /contact              # Contact page
    /demo                 # Demo request page
    /features             # Features page
    /pricing              # Pricing page
    /privacy-policy       # Privacy policy page
    /resources            # Resources page
    /terms-of-service     # Terms of service page
    globals.css           # Global styles
    layout.tsx            # Root layout
    page.tsx              # Homepage
  /components             # React components
    /home                 # Homepage components
    /layout               # Layout components
    /sections             # Page section components
    /ui                   # UI components
  /lib                    # Utility functions and libraries
/public                   # Static assets
```

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/traceit-frontend.git
cd traceit-frontend
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface using Tailwind CSS
- **SEO Optimized**: Built with SEO best practices
- **Fast Performance**: Built on Next.js for optimal performance
- **Legal Compliance**: Includes privacy policy and terms of service

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## License

[Add your license information here]

## Contact

For more information or inquiries, please contact [hello@traceit.ca](mailto:hello@traceit.ca).
