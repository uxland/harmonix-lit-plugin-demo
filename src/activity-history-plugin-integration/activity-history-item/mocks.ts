import type { IActivityHistoryItem } from "@uxland/primary-shell";

export const mockActivityHistoryItem: IActivityHistoryItem = {
	id: "ID12345",
	date: "2025-05-16T09:20:09.903Z",
	professional: {
		id: "professional456",
		name: "Dr. Martínez",
		speciality: {
			id: "speciality123",
			description: "Metge família",
		},
		role: {
			id: "role123",
			description: "Facultatiu",
		},
	},
	relevant: true,
	diagnostics: [
		{
			codi: "J01.90",
			cataleg: "2.16.840.1.113883.6.3",
			descripcio: "SINUSITIS AGUDA",
		},
	],
	center: {
		id: "center321",
		description: "CAP Manso",
	},
	up: {
		id: "up654",
		description: "Unitat Emergències",
	},
	ep: {
		id: "ep987",
		description: "Pediatria",
	},
	service: {
		id: "service543",
		description: "Cardiología",
	},
	tag: {
		id: "tag111",
		description: "Seguiment",
	},
	content: {
		html: "<p>Pacient amb sinusitis aguda. Es pauta tractament antibiòtic.</p>",
		plainText: "Pacient amb sinusitis aguda. Es pauta tractament antibiòtic.",
	},
	noteType: {
		id: "noteType222",
		description: "Nota clínica",
	},
	deleted: false,
};
