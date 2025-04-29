import { z } from 'zod';
import historyData from '~/types/history-data';

const history = z.object({
    data: historyData,
    split_interval: z.number(),
    min_value: z.number(),
    max_value: z.number(),
    offset: z.number(),
});

type history = z.infer<typeof history>;

export default history;
export { history };
