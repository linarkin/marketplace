export interface MetadataProp {
  blockPricingStrategy: {
    name: string;
    unit?: string;
    direction?: string;
    credits: number;
  };
  blockThumbnailUrl?: string;
  pricingStrategy?: {
    credits: number;
    type?: string;
  };
}

export interface ProductItemProp {
  id: string;
  name: string;
  createdAt?: string;
  createdBy?: null;
  description?: string;
  displayId?: string;
  displayName: string;
  isAccessGranted?: boolean;
  isCreditPurchaseRequired?: boolean;
  isPublic?: boolean;
  isPublicVersion?: boolean;
  isRestricted?: boolean;
  isValid?: boolean;
  manifestVersion?: number;
  metadata?: MetadataProp;
  provider?: string;
  tags?: string[];
  type?: string;
  updatedAt?: string;
  updatedBy?: null;
  version?: string;
  quantity: number;
}
