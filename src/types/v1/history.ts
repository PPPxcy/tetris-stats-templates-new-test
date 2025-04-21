import { z } from 'zod';
import historyData from '~/types/history-data';

const history = z.object({
    data: historyData,
    split_interval: z.number().positive(),
    min_value: z.number().positive(),
    max_value: z.number().positive(),
    offset: z.number(),
});

type history = z.infer<typeof history>;

export default history;
export { history };
