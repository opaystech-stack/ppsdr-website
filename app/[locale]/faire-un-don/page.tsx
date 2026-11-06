import { redirect } from 'next/navigation';
export default function LegacyDonatePage({params}: {params: {locale: string}}) {
  redirect(params.locale === 'en' ? '/en?don=1' : '/?don=1');
}
