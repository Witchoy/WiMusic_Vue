<template>
    <div>
        <h2>Tracks</h2>
        <div v-if="tracks.length > 0">
            <TrackItem v-for="track in tracks" :key="track.id" :track="track" />
        </div>
        <p v-else>No tracks</p>
    </div>
</template>

<script setup lang="ts">
import TrackItem from './TrackItem.vue';
import type { Track } from '@/types';

interface Props {
    tracks: Track[];
}

defineProps<Props>();
</script>