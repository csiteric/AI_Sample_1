import { loadMachines, loadGrinders } from '@/lib/runtime-loader'
import { AppShell } from '@/components/dialed-in/app-shell'

export default function Page() {
  const machines = loadMachines()
  const grinders = loadGrinders()

  return <AppShell machines={machines} grinders={grinders} />
}
