import { renderHook } from '@testing-library/react-hooks';
import { useLoginSchema } from '../useLoginSchema';

describe('useLoginSchema suit test', () => {
    it('should test hook return', () => {
        const { result } = renderHook(() => useLoginSchema());
        expect(result.current.schema).toBeTruthy();
    });
});
