export async function DisplayId({
  ...props
}: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params
  return (
    <div>
      {params.id} {Math.random()}
    </div>
  )
}
