import { useRouter } from 'next/router'

const useDrawer = () => {
  const router = useRouter()

  const drawerOpen = ( name:string ) => {
    history.scrollRestoration = 'auto'
    router.push(router.asPath, `${router.asPath.split('#')[0]}#${name}`, {
      scroll: true,
    })
  }

  const drawerClose = () => {
    const isDirectEntry = !sessionStorage.getItem('previous_page')
    if (isDirectEntry) {
      router.replace(router.asPath.split('#')[0])
    } else {
      router.back()
    }
    history.scrollRestoration = 'manual'
  }

  const isDrawerOpen =( name:string )=> {
    return router.asPath?.split('#')[1]?.includes(name)
  }

  return {
    drawerOpen,
    drawerClose,
    isDrawerOpen,
  }
}

export default useDrawer
