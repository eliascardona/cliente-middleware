const responseHere = document.getElementById('response')
const probarBtn = document.getElementById('probarBtn')

console.log(responseHere)

async function probarEndpoint(evt) {
    evt.preventDefault()
    const temp = {
        section1: {
            sectionId: 'identification',
            employeeId: "12345",
            name: "John Doe",
            age: 35,
        },
        section2: {
            sectionId: 'workCharacteristics',
            jobSatisfaction: 8,
            workEnvironment: "Supportive",
        },
        section3: {
            sectionId: 'familySystemFactors',
            familySupport: "Good",
            numberOfDependents: 3,
        },
        section4: {
            sectionId: 'socioCulturalEconomicFactors',
            income: 4500,
            educationLevel: "Bachelor's",
            employmentStatus: "Full-time",
        },
        section5: {
            sectionId: 'generalHealthStatus',
            healthStatus: "Good",
            chronicConditions: ["None"],
            recentHospitalization: false,
        },
        section6: {
            sectionId: 'universalSelfCare',
            selfCareHabits: "Regular Exercise",
            sleepQuality: "Good",
        },
        section7: {
            sectionId: 'cardiovascularSystem',
            heartCondition: "None",
            bloodPressure: 120,
        },
        section8: {
            sectionId: 'nutrition',
            dailyFruitVegetableIntake: 5,
            waterIntake: "Adequate",
        },
        section9: {
            sectionId: 'lifestyle',
            activityLevel: "Moderate",
            restQuality: "Good",
        },
        section10: {
            sectionId: 'auditoryVisualSystem',
            hearingCondition: "Normal",
            visionCondition: "Normal",
        },
        section11: {
            sectionId: 'lifeThreateningRiskPrevention',
            smokingStatus: "Non-smoker",
            alcoholConsumption: "Occasional",
        },
        section12: {
            sectionId: 'environmentalFactors',
            workEnvironmentQuality: "Good",
            noiseLevel: "Low",
        },
        section13: {
            sectionId: 'promotionOfHumanFunctioning',
            mentalHealth: "Stable",
            socialInteractionLevel: "High",
        }
    }

    try {
        const r = await fetch('http://localhost:8082/forms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(temp)
        })
        if(!r.ok) {
            console.log('Error en la solicitud HTTP')
        }
        console.log(r)
        responseHere.innerText = `server dice`

    } catch(err) {
        console.log('Error en el servidor', err)
    }
}

probarBtn.addEventListener('click', async (e) => {
    await probarEndpoint(e)
})



// form.addEventListener('submit', async (e) => {
//     const resp = await createMovie(e)
//     if(typeof resp.pelicula_id === 'string') {
//         respHere.innerText(`Has creado una película con el Id ${resp.pelicula_id}`)
//     }
// })

// estimar precio del total de articulos
// async function showMovies() {
//     try {
//         const r = await fetch('/movies/all', {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         const j = await r.json()
//         const temp = { ...j }

//         let stringTemp = "id: " + temp.pelicula_id + ", nombre: " + temp.nombre + "."

//         return stringTemp

//     } catch (e) {
//         console.log("err on fetch", e)
//     }

// }