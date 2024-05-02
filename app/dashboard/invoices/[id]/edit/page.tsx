// import Form from '@/app/ui/invoices/edit-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers, fetchAllInvoices } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   const invoices = await fetchAllInvoices();
//   console.log(`invoices: ${invoices}`);
//   return invoices.map((item) => ({ id: item.id }));
// }

// export default async function Page({ params }: { params: { id: string } }) {
//   // const invoices = await fetchAllInvoices();
//   // console.log(`invoices: ${JSON.stringify(invoices, null, 4)}`);

//   const id = params.id;
//   const [invoice, customers] = await Promise.all([
//     fetchInvoiceById(id),
//     fetchCustomers()
//   ]);

//   if (!invoice) {
//     notFound();
//   }
  
//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: 'Invoices', href: '/dashboard/invoices' },
//           {
//             label: 'Edit Invoice',
//             href: `/dashboard/invoices/${id}/edit`,
//             active: true
//           }
//         ]}
//       />
//       <Form invoice={invoice} customers={customers} />
//     </main>
//   );
// }
