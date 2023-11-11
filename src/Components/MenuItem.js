import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:textamber600">
        <Icon className="text-2xl sm:hidden mx-4"></Icon>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
