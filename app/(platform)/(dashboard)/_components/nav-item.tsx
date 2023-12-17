'use client';

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

interface NavItemProps {
  isActive: boolean;
  organization: Organization;
  isExpand: boolean;
  onExpand: (id: string) => void;
}

export const NavItem = ({
  isActive,
  organization,
  isExpand,
  onExpand,
}: NavItemProps) => {
  return <div>Nav Item</div>;
};
