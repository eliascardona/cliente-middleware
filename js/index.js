const responseHere = document.getElementById('response')
const probarBtn = document.getElementById('probarBtn')

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
            workEnvironment: 8,
        },
        section3: {
            sectionId: 'familySystemFactors',
            familySupport: 3,
            numberOfDependents: 3,
        },
        section4: {
            sectionId: 'socioCulturalEconomicFactors',
            income: 5000,
            educationLevel: 5,
            employmentStatus: 2,
        },
        section5: {
            sectionId: 'generalHealthStatus',
            healthStatus: 21,
            chronicConditions: [1, 2, 3],
            recentHospitalization: 1,
        },
        section6: {
            sectionId: 'universalSelfCare',
            selfCareHabits: 2,
            sleepQuality: 2,
        },
        section7: {
            sectionId: 'cardiovascularSystem',
            heartCondition: 10,
            bloodPressure: 3,
        },
        section8: {
            sectionId: 'nutrition',
            dailyFruitVegetableIntake: 5,
            waterIntake: 1,
        },
        section9: {
            sectionId: 'lifestyle',
            activityLevel: 2,
            restQuality: 2,
        },
        section10: {
            sectionId: 'auditoryVisualSystem',
            hearingCondition: 2,
            visionCondition: 2,
        },
        section11: {
            sectionId: 'lifeThreateningRiskPrevention',
            smokingStatus: 2,
            alcoholConsumption: 2,
        },
        section12: {
            sectionId: 'environmentalFactors',
            workEnvironmentQuality: 2,
            noiseLevel: 2,
        },
        section13: {
            sectionId: 'promotionOfHumanFunctioning',
            mentalHealth: 4,
            socialInteractionLevel: 4,
        }
    }

    try {
        const r = await fetch('http://localhost:8082/forms', {
            // mode: 'no-cors',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(temp)
        })
        const j = await r.json()
        console.log(j)

    } catch(err) {
        console.log('Error en el servidor', err)
    }
}

probarBtn.addEventListener('click', async (e) => {
    await probarEndpoint(e)
})