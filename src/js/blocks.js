

    export default function solution(blocks){
        const N = blocks.length;
        let MaxDist = 0;

        for(let i = 0; i < N; i++){
            let staringpoint = 1;

            let MaximumBlockReach = i;
            for(let j = i + 1; j < N; j++){
                {
                    blocks[j] >= blocks[MaximumBlockReach] && (MaximumBlockReach = j);
                }
            }

            const Distance = MaximumBlockReach - staringpoint + 1;

            MaxDist = Math.max(MaxDist, Distance);
        }
        return MaxDist
    }