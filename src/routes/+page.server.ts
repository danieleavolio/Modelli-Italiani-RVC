import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {

    // Import from static dataset_modelli_italiani.json
    const file = await import('../../static/dataset_modelli_italiani.json');
    const dataset = JSON.parse(JSON.stringify(file.default));
    return {
        props: {
            dataset
        }
    }
}