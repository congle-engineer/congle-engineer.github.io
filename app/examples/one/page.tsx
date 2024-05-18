import { StarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";

export default function ExampleOne() {
  return (
    <div className="w-[36rem] rounded-lg bg-white p-12 flex">
      <img
        src="/couple.jpeg"
        className="w-32 h-32 shrink-0 self-start rounded-full border-[11px] border-white"
        alt="Image"
      />
      <div className="space-y-7 text-black">
        <h1 className="text-3xl font-bold">My Family</h1>
        <h2 className="mt-1">3D Artists</h2>

        <div className="space-y-4">
          <p><StarOutlined /> 4.7 Rating</p>
          <p><EyeOutlined /> 4,567 Reviews</p>
          <p><UserOutlined /> 478 Students</p>
        </div>

        <p className="text-lg">
          We are a happy family. We wake up every day with smiles and joys.
          Can't wait to enjoy life with the way that we want.
        </p>

        <button className="p-2 rounded-md border-2 border-black">Show more</button>
      </div>
    </div>
  )
}
