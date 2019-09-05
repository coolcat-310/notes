const population_model = population =>{
    // Helper functions
    const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
    const mult = a => b => a * b;
    const sum = (a, b) => a + b;
    const becomeSick = mult(0.6);
    const remainHealthy = mult(0.3);
    const becomeDead = mult(0.1);
    const recover = mult(0.2);
    const remainSick = mult(0.2);
    const sick2dead = mult(0.6);

    /**
     * @desc The initial contamination of healthy people
     * @param obj
     * @returns {{healthy: *, dead: *, sick: *}}
     */
    const infection = obj =>{
        return {
            ...obj,
            healthy: remainHealthy(obj.healthy),
            sick: sum(obj.sick, becomeSick(obj.healthy)),
            dead: sum(obj.dead,becomeDead(obj.healthy))
        };
    };

    /**
     * @desc The prognosis of the disease and its effect on the population
     * @param obj
     * @returns {{year: *, healthy: *, dead: *, sick: *}}
     */
    const recovery = obj =>{
        return{
            ...obj,
            healthy: sum(obj.healthy, recover(obj.sick)),
            sick: remainSick(obj.sick),
            dead: sum(obj.dead, sick2dead(obj.sick)),
            year: sum(obj.year, 1)
        }
    };

    // compose both inner functions into a first class function
    const populationDensity = compose(recovery, infection);

    // initialize obj with the given population size
    let population_groups = {
        healthy: population,
        sick: 0,
        dead: 0,
        year: 0
    };

    console.log(population_groups);

    // Enter this code as long as the
    while(sum(population_groups.healthy, population_groups.sick) > mult(population)(0.10)){
        population_groups = populationDensity(population_groups);
        console.log(population_groups);
    }

};

population_model(200);

