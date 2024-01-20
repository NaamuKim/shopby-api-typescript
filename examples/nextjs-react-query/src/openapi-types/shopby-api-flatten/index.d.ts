import {
  Get as AuthGet,
  Post as AuthPost,
  Put as AuthPut,
  Patch as AuthPatch,
  Delete as AuthDelete,
  Options as AuthOptions,
  Trace as AuthTrace,
} from '@/openapi-types/shopby-api-flatten/auth-shop';
import {
  Get as AdminGet,
  Post as AdminPost,
  Put as AdminPut,
  Patch as AdminPatch,
  Delete as AdminDelete,
  Options as AdminOptions,
  Trace as AdminTrace,
} from '@/openapi-types/shopby-api-flatten/admin-shop';
import {
  Get as ClaimGet,
  Post as ClaimPost,
  Put as ClaimPut,
  Patch as ClaimPatch,
  Delete as ClaimDelete,
  Options as ClaimOptions,
  Trace as ClaimTrace,
} from '@/openapi-types/shopby-api-flatten/claim-shop';
import {
  Get as DisplayGet,
  Post as DisplayPost,
  Put as DisplayPut,
  Patch as DisplayPatch,
  Delete as DisplayDelete,
  Options as DisplayOptions,
  Trace as DisplayTrace,
} from '@/openapi-types/shopby-api-flatten/display-shop';
import {
  Get as ManageGet,
  Post as ManagePost,
  Put as ManagePut,
  Patch as ManagePatch,
  Delete as ManageDelete,
  Options as ManageOptions,
  Trace as ManageTrace,
} from '@/openapi-types/shopby-api-flatten/manage-shop';
import {
  Get as MemberGet,
  Post as MemberPost,
  Put as MemberPut,
  Patch as MemberPatch,
  Delete as MemberDelete,
  Options as MemberOptions,
  Trace as MemberTrace,
} from '@/openapi-types/shopby-api-flatten/member-shop';
import {
  Get as OrderGet,
  Post as OrderPost,
  Put as OrderPut,
  Patch as OrderPatch,
  Delete as OrderDelete,
  Options as OrderOptions,
  Trace as OrderTrace,
} from '@/openapi-types/shopby-api-flatten/order-shop';
import {
  Get as ProductGet,
  Post as ProductPost,
  Put as ProductPut,
  Patch as ProductPatch,
  Delete as ProductDelete,
  Options as ProductOptions,
  Trace as ProductTrace,
} from '@/openapi-types/shopby-api-flatten/product-shop';
import {
  Get as PromotionGet,
  Post as PromotionPost,
  Put as PromotionPut,
  Patch as PromotionPatch,
  Delete as PromotionDelete,
  Options as PromotionOptions,
  Trace as PromotionTrace,
} from '@/openapi-types/shopby-api-flatten/promotion-shop';
import {
  Get as WorkspaceGet,
  Post as WorkspacePost,
  Put as WorkspacePut,
  Patch as WorkspacePatch,
  Delete as WorkspaceDelete,
  Options as WorkspaceOptions,
  Trace as WorkspaceTrace,
} from '@/openapi-types/shopby-api-flatten/workspace-shop';

export interface Get
  extends AuthGet,
    AdminGet,
    ClaimGet,
    DisplayGet,
    ManageGet,
    MemberGet,
    ProductGet,
    PromotionGet,
    OrderGet,
    WorkspaceGet {}

export interface Post
  extends AuthPost,
    AdminPost,
    ClaimPost,
    DisplayPost,
    ManagePost,
    MemberPost,
    ProductPost,
    PromotionPost,
    OrderPost,
    WorkspacePost {}

export interface Put
  extends AuthPut,
    AdminPut,
    ClaimPut,
    DisplayPut,
    ManagePut,
    MemberPut,
    ProductPut,
    PromotionPut,
    OrderPut,
    WorkspacePut {}

export interface Patch
  extends AuthPatch,
    AdminPatch,
    ClaimPatch,
    DisplayPatch,
    ManagePatch,
    MemberPatch,
    ProductPatch,
    PromotionPatch,
    OrderPatch,
    WorkspacePatch {}

export interface Delete
  extends AuthDelete,
    AdminDelete,
    ClaimDelete,
    DisplayDelete,
    ManageDelete,
    MemberDelete,
    ProductDelete,
    PromotionDelete,
    OrderDelete,
    WorkspaceDelete {}

export interface Options
  extends AuthOptions,
    AdminOptions,
    ClaimOptions,
    DisplayOptions,
    ManageOptions,
    MemberOptions,
    ProductOptions,
    PromotionOptions,
    OrderOptions,
    WorkspaceOptions {}

export interface Trace
  extends AuthTrace,
    AdminTrace,
    ClaimTrace,
    DisplayTrace,
    ManageTrace,
    MemberTrace,
    ProductTrace,
    PromotionTrace,
    OrderTrace,
    WorkspaceTrace {}
