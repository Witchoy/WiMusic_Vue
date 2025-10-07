<template>
    <div class="track-item">
        <h3 class="track-title">{{ track.title }}</h3>
        <p class="track-details">{{ artistNames }} - {{ albumNames }} - {{ formattedDuration }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Track } from '@/types';

interface Props {
    track: Track;
}

const props = defineProps<Props>();

const artistNames = computed(() => {
    return props.track.artists.map(artist => artist.name).join(', ');
});

const albumNames = computed(() => {
    return props.track.albums.map(album => album.title).join(', ');
});

const formattedDuration = computed(() => {
    const minutes = Math.floor(props.track.duration / 60);
    const seconds = props.track.duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});
</script>

<style scoped>
.track-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease-in-out;
}

.track-item:hover {
  background-color: #f5f5f5;
  transform: translateY(-6px);  
}


.track-title {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #333;
}

.track-details {
    margin: 0;
    color: #666;
    font-size: 14px;
}
</style>