export class Competition {
	private readonly scores: number[]
	private orderedWorks: Map<number, number>

	constructor(participantCount: number) {
		this.scores = Array(participantCount).fill(0)
		this.orderedWorks = new Map()

		for (let i = 0; i < participantCount; i++) {
			this.orderedWorks.set(i, 0)
		}
	}

	private changeScore(participantId: number, change: number): void {
		this.scores[participantId] += change
		this.orderedWorks.set(participantId, this.scores[participantId])
	}

	public like(participantId: number): void {
		this.changeScore(participantId, 1)
	}

	public dislike(participantId: number): void {
		this.changeScore(participantId, -1)
	}

	public getBestWorks(K: number): number[] {
		const result: number[] = []

		// Создаем массив пар из Map и сортируем его по убыванию оценки
		const sortedWorks = Array.from(this.orderedWorks.entries()).sort(
			(a, b) => b[1] - a[1]
		)

		for (let i = 0; i < K; i++) {
			if (i >= sortedWorks.length) {
				break
			}
			result.push(sortedWorks[i][0])
		}

		return result
	}
}
