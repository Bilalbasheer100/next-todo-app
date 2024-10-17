import Column from '@/components/Column'
function page() {
  return (
    <>
    <div class="todo">
      <h1>TODO LIST</h1>
    </div>
    <div className="App">
    <Column state="PLANNED" />
    <Column state="ONGOING" />
    <Column state="DONE" />
  </div>
    </>
  )
}

export default page
