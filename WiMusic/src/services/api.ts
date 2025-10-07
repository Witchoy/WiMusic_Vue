import type { TracksResponse } from '@/types';

const API_BASE_URL = 'http://localhost:3000';

export const apiService = {
    async getTracks(): Promise<TracksResponse> {
        const response = await fetch(`${API_BASE_URL}/tracks`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
};