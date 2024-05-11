import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Invoices Details',
  };
 
export default async function Page({ params}: { params: { id: string} }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ])

    if (!invoice) {
       return notFound();
    }

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
                { label: 'invoices', href: '/dashboard/invoices' },
                {
                    label: 'Edit Invoice',
                    href: `/dashboard/invoices/${id}/edit`,
                    active: true
                },
            ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    )
}