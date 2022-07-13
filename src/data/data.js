export const Data = {
	header: {
		title: 'А вдруг СМА?'
	},

	patient: {
		title: 'Выберите, кто Ваш пациент:',
		items: [
			{
				id: 0,
				human: 'Взрослый',
				url: 'female',
				indications: [
					'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
					'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
					'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.'
				],
				isActive: false
			},
			{
				id: 1,
				human: 'Ребенок',
				url: 'child',
				indications: [
					'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
					'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания.'
				],
				isActive: false
			}
		]
	},

	answer: {
		title: 'Сообщает ли один из ваших пациентов о следующих симптомах?',
		subtitle: '(наведите на любую иконку и узнайте больше)'
	}
}