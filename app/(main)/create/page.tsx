"use client";
import { Button } from "@/components/ui/button";
import React, { ChangeEvent, useState, FormEvent } from "react";
import { FaTrash } from "react-icons/fa";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/database_types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Create = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [inputFields, setInputFields] = useState<string[]>([""]);
  const [Title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [Image, setImage] = useState<File | null>(null);
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (!user || error) {
      return router.replace("/");
    }
    if (Image && user) {
      const url = user.id + "/" + Image.name;
      const { data: imgData, error: imgError } = await supabase.storage
        .from("NFT")
        .upload(url, Image, {
          contentType: "image/jpeg",
          upsert: true,
        });
      if (imgError || !imgData) {
        toast.error("File could'nt be uploaded");
        return router.refresh();
      }
      if (imgData) {
        if (inputFields.length == 1 && inputFields[0] == "") {
          const Price = Number(price);
          const { error } = await supabase.from("NFT").insert({
            image_url: imgData.path,
            Title: Title,
            user_id: user.id,
            price: Price,
          });
          if (error) {
            console.log(error);
            toast.error("Could'nt save NFT");
            return router.refresh();
          }
        } else {
          const Price = Number(price);
          const { error } = await supabase.from("NFT").insert({
            image_url: imgData.path,
            Title: Title,
            user_id: user.id,
            price: Price,
            Benefits: inputFields,
          });
          if (error) {
            toast.error("Could'nt save NFT");
            return router.refresh();
          }
        }
      }
    }
    toast.success("NFT saved");
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    setImage(null);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, ""]);
  };

  const handleRemoveField = (index: number) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = event.target.value;
    setInputFields(updatedFields);
  };

  return (
    <form className="flex w-full text-gray-300 p-5" onSubmit={handleClick}>
      <div className="w-2/6 flex items-center justify-center bg-gray-950">
        {imagePreview === null && (
          <div>
            <p className="text-3xl font-bold mb-5">Upload Image</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
        )}
        {imagePreview && (
          <div className="flex flex-col items-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-full w-full mb-5"
            />
            <Button variant={"outline"} onClick={handleRemoveImage}>
              Remove File
            </Button>
          </div>
        )}
      </div>
      <div className="w-4/6 flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-10">Create Your NFT</h1>
        <input
          placeholder="Title"
          className="h-12 m:w-1/5 w-3/6 rounded-xl mx-auto p-2 border text-black mb-3"
          type="text"
          value={Title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="Price in Eth"
          className="h-12 m:w-1/5 w-3/6 rounded-xl mx-auto p-2 border text-black mb-3"
          type="text"
          value={price}
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <div className="mb-10 w-1/2">
          {inputFields.map((field, index) => (
            <div className="flex" key={index}>
              <input
                type="text"
                value={field}
                onChange={(e) => handleInputChange(index, e)}
                className="h-12 m:w-1/5 w-full rounded-xl mx-auto p-2 border text-black mb-3 mr-2"
                placeholder="Benefit"
              />
              <button type="button" onClick={() => handleRemoveField(index)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <Button variant={"outline"} type="button" onClick={handleAddField}>
            Add Benefit
          </Button>
        </div>
        <Button
          variant="outline"
          className=" text-black bg-gradient-to-b from-purple-700 to-pink-500 transition duration-300 ease-in-out rounded-xl"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Create;
