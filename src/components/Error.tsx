type PropsType = {
    key:string
    message: string
}

export default function Error({message} : PropsType) {
  return (
    <>
        <p className="p-1 text-lg text-center text-white bg-red-300 border border-red-700 rounded-md text-bold">{message}</p>
    </>
  )
}
