
export function registerEffect (doll, simulator) {
  const {dollData} = doll
  const {gridPos, gunType, dummyLink, effect} = dollData

  if (effect) {
    const {effectType, effectCenter, effectPos, gridEffect} = effect

    simulator.on('statCalculate', (target, addStats) => {
      const {dollData: targetData} = target

      const posContrast = effectCenter !== 0 ? effectCenter - 13 : 0
      const posCompensate = effectCenter - gridPos

      // 버프 적용 칸에 들어와 있을 때
      if (effectPos.some((pos) => (pos - posCompensate + posContrast) === targetData['gridPos'])) {
        // 버프 적용 대상인지 확인
        if (effectType === 0 || targetData['gunType'] === effectType) {
          gridEffect.forEach((elem) => {
            const {type, value} = elem

            // 버프를 주는 인형이 HG일 시 편제에 따라 가산치를 줌
            const applyValue = gunType === 1
              ? value * (1 + (dummyLink - 1) * 0.25)
              : value

            if (type) {
              if (type === 'crit') {
                addStats['add'][type] += applyValue
              } else {
                addStats['effectMul'][type] += applyValue / 100
              }
            }
          })
        }
      }
    })
  }
}
