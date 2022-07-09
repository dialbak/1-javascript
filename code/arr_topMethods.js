/**
 * find, some, every, includes, map, filter, reduce
 */
const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: [
            'Intelligent',
            'Active',
            'Alert',
            'Faithful',
            'Trainable',
            'Instinctual',
            "tutu"
        ],
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful', 'zozo'],
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: [
            'Intelligent',
            'Even Tempered',
            'Kind',
            'Agile',
            'Outgoing',
            'Trusting',
            'Gentle',
        ],
    },
]

console.log(
    "1", dogs.find(dog => dog.name === 'Bernese Mountain Dog'), "\n",

    "2", dogs.some(dog => dog.temperament.includes('Aggressive')), "\n",

    "3", dogs.some(dog => dog.temperament.includes('Trusting')), "\n",

    "4", dogs.every(dog => dog.temperament.includes('Trusting')), "\n",

    "5", dogs.every(dog => dog.temperament.includes('Intelligent')), "\n",

    "6", dogs.map(dog => dog.name), "\n",

    "7", dogs.filter(dog => dog.temperament.includes('Faithful'))
)

/**
 * for all dogs
 * reduce each dog.temperament in allTemperaments
 */
dogs.reduce((allTemperaments, dog) => {
    const arr = [...allTemperaments, ...dog.temperament]
    console.log("8", arr)
    return arr
}, [])
