import { Competition } from './index'

function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

describe('Competition class', () => {
	test('should generate correct best works with random data', () => {
		const participantCount = 10
		const competition = new Competition(participantCount)

		// Создаем массив для хранения сгенерированных оценок
		const generatedScores: number[] = []

		for (let i = 0; i < participantCount; i++) {
			const likes = getRandomInt(0, 50)
			const dislikes = getRandomInt(0, 50)
			const score = likes - dislikes

			generatedScores.push(score)

			for (let j = 0; j < likes; j++) {
				competition.like(i)
			}
			for (let j = 0; j < dislikes; j++) {
				competition.dislike(i)
			}
		}

		const bestWorks = competition.getBestWorks(5)
		const sortedGeneratedScores = generatedScores
			.map((score, index) => ({
				score,
				index,
			}))
			.sort((a, b) => b.score - a.score)
			.slice(0, 5)
			.map(item => item.index)

		console.log(bestWorks)
		console.log(sortedGeneratedScores)
		expect(bestWorks).toEqual(sortedGeneratedScores)
	})
})
