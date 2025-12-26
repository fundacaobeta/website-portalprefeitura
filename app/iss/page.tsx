
import { promises as fs } from 'fs';
import path from 'path';
import { PageLayout } from '@/components/layout/PageLayout';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function Page() {
    const filePath = path.join(process.cwd(), '_content', 'iss.md');
    const content = await fs.readFile(filePath, 'utf8');

    return (
        <PageLayout>
            <Card>
                <CardHeader>
                    <CardTitle>ISS Prefeitura Betim</CardTitle>
                </CardHeader>
                <CardContent>
                    <MarkdownRenderer content={content} />
                </CardContent>
            </Card>
        </PageLayout>
    );
}
