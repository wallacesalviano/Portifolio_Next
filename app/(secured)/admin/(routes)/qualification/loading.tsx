import { Skeleton } from '@/components/ui/skeleton';
import { DataTableLoading } from '@/components/data-table/data-table-loading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QualificationLoading() {
  return (
    <Card className='rounded-lg border-none'>
      <CardHeader className='mx-[1px] pb-9'>
        <CardTitle className='text-xl font-semibold'>
          <Skeleton className='h-7 w-[100px]' />
        </CardTitle>
        <Skeleton className='h-5 w-[300px]' />
      </CardHeader>
      <CardContent>
        <DataTableLoading columnCount={9} rowCount={7} />
      </CardContent>
    </Card>
  );
}
