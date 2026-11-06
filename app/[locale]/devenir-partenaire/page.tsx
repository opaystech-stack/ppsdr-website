import { redirect } from 'next/navigation';
export default function LegacyPartnershipPage({params}: {params: {locale: string}}) {
  redirect(params.locale === 'en' ? '/en/partenariat' : '/partenariat');
}
