<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TrackList from './components/TrackList.vue';
import { apiService } from './services/api';
import type { Track } from './types';

const tracks = ref<Track[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchTracks = async () => {
	loading.value = true;
	error.value = null;

	try {
		const response = await apiService.getTracks();
		tracks.value = response.tracks;
	} catch (err) {
		error.value = err instanceof Error ? err.message : 'Error loading tracks';
	} finally {
		loading.value = false;
	}
};

onMounted(() => {
	fetchTracks();
});
</script>

<template>
	<div>
		<h1>WiMusic</h1>

		<div v-if="loading">Loading...</div>

		<div v-else-if="error">
			<p>Error: {{ error }}</p>
			<button @click="fetchTracks">Retry</button>
		</div>

		<TrackList v-else :tracks="tracks" />
	</div>
</template>
