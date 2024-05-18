import { StarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function ExampleOne() {
  return (
    <div className="w-[36rem] rounded-lg bg-white p-12 flex">
      <Image
        src="/couple.jpeg"
        width={100}
        height={100}
        className="shrink self-start rounded-full border-[11px] border-white"
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
          Cant wait to enjoy life with the way that we want.
        </p>

        <button className="p-2 rounded-md border-2 border-black">Show more</button>
      </div>
    </div>
  )
}
