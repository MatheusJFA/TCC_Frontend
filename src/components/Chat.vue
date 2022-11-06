<template>
	<div class="mx-auto w-full">
		<div class="flex flex-wrap">
			<div class="mx-auto w-full h-full max-w-7xl  flex px-4">
				<div
					class="relative w-full flex flex-col min-w-0 break-words bg-slate-50 rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<Chat />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script lang="ts">
import Chat from "./chat/Chat.vue";
import socket from '../utils/socket';
import { useRoute } from 'vue-router';

//@ts-nocheck
export default {
	name: "App",
	components: {
		Chat,
	},
	beforeCreate() {
		const route = useRoute();
		const id = route.params.id as string;
		socket.auth = { id };

		socket.connect();
	},
	created() {
		const sessionId = localStorage.getItem("sessionID");

		if (sessionId) {
			console.log(sessionId)
			socket.auth = { sessionId };
			socket.connect();
		}

		socket.on("session", ({ sessionId, userId }) => {

			console.log({ sessionId, userId })
			// attach the session ID to the next reconnection attempts
			socket.auth = { sessionId };
			// store it in the localStorage
			localStorage.setItem("sessionID", sessionId);
			// save the ID of the user
			(socket as any).userId = userId;
		});
	},
}
</script>
  
<style>
body {
	margin: 0;
}
</style>