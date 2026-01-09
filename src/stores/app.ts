export const useAppStore = defineStore('app', () => {
  const counter = ref(0)
  const setCounter = (num: number) => {
    counter.value = num
  }

  return { counter, setCounter }
})

export const useAppStoreWithOut = useAppStore(pinia)
