
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Bin
 * 
 */
export type Bin = $Result.DefaultSelection<Prisma.$BinPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryTransaction
 * 
 */
export type InventoryTransaction = $Result.DefaultSelection<Prisma.$InventoryTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InventoryStatus: {
  Active: 'Active',
  Inactive: 'Inactive'
};

export type InventoryStatus = (typeof InventoryStatus)[keyof typeof InventoryStatus]


export const InvTranType: {
  INITIAL: 'INITIAL',
  PURCHASE: 'PURCHASE',
  CONSUMED: 'CONSUMED',
  ADJUST: 'ADJUST',
  DISCARD: 'DISCARD'
};

export type InvTranType = (typeof InvTranType)[keyof typeof InvTranType]

}

export type InventoryStatus = $Enums.InventoryStatus

export const InventoryStatus: typeof $Enums.InventoryStatus

export type InvTranType = $Enums.InvTranType

export const InvTranType: typeof $Enums.InvTranType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Locations
 * const locations = await prisma.location.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bin`: Exposes CRUD operations for the **Bin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bins
    * const bins = await prisma.bin.findMany()
    * ```
    */
  get bin(): Prisma.BinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryTransaction`: Exposes CRUD operations for the **InventoryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
    * ```
    */
  get inventoryTransaction(): Prisma.InventoryTransactionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Location: 'Location',
    Bin: 'Bin',
    Store: 'Store',
    Product: 'Product',
    Inventory: 'Inventory',
    InventoryTransaction: 'InventoryTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "location" | "bin" | "store" | "product" | "inventory" | "inventoryTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Bin: {
        payload: Prisma.$BinPayload<ExtArgs>
        fields: Prisma.BinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          findFirst: {
            args: Prisma.BinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          findMany: {
            args: Prisma.BinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>[]
          }
          create: {
            args: Prisma.BinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          createMany: {
            args: Prisma.BinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          update: {
            args: Prisma.BinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          deleteMany: {
            args: Prisma.BinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BinPayload>
          }
          aggregate: {
            args: Prisma.BinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBin>
          }
          groupBy: {
            args: Prisma.BinGroupByArgs<ExtArgs>
            result: $Utils.Optional<BinGroupByOutputType>[]
          }
          count: {
            args: Prisma.BinCountArgs<ExtArgs>
            result: $Utils.Optional<BinCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransaction: {
        payload: Prisma.$InventoryTransactionPayload<ExtArgs>
        fields: Prisma.InventoryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          update: {
            args: Prisma.InventoryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransaction>
          }
          groupBy: {
            args: Prisma.InventoryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    location?: LocationOmit
    bin?: BinOmit
    store?: StoreOmit
    product?: ProductOmit
    inventory?: InventoryOmit
    inventoryTransaction?: InventoryTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    inventories: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | LocationCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type BinCountOutputType
   */

  export type BinCountOutputType = {
    inventories: number
  }

  export type BinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | BinCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * BinCountOutputType without action
   */
  export type BinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BinCountOutputType
     */
    select?: BinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BinCountOutputType without action
   */
  export type BinCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    inventories: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | StoreCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventories: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | ProductCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    transactions: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | InventoryCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    loc_id: number | null
  }

  export type LocationSumAggregateOutputType = {
    loc_id: number | null
  }

  export type LocationMinAggregateOutputType = {
    loc_id: number | null
    loc_name: string | null
    loc_desc: string | null
    loc_createdAt: Date | null
    loc_updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    loc_id: number | null
    loc_name: string | null
    loc_desc: string | null
    loc_createdAt: Date | null
    loc_updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    loc_id: number
    loc_name: number
    loc_desc: number
    loc_createdAt: number
    loc_updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    loc_id?: true
  }

  export type LocationSumAggregateInputType = {
    loc_id?: true
  }

  export type LocationMinAggregateInputType = {
    loc_id?: true
    loc_name?: true
    loc_desc?: true
    loc_createdAt?: true
    loc_updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    loc_id?: true
    loc_name?: true
    loc_desc?: true
    loc_createdAt?: true
    loc_updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    loc_id?: true
    loc_name?: true
    loc_desc?: true
    loc_createdAt?: true
    loc_updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    loc_id: number
    loc_name: string
    loc_desc: string | null
    loc_createdAt: Date
    loc_updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    loc_id?: boolean
    loc_name?: boolean
    loc_desc?: boolean
    loc_createdAt?: boolean
    loc_updatedAt?: boolean
    inventories?: boolean | Location$inventoriesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    loc_id?: boolean
    loc_name?: boolean
    loc_desc?: boolean
    loc_createdAt?: boolean
    loc_updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"loc_id" | "loc_name" | "loc_desc" | "loc_createdAt" | "loc_updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Location$inventoriesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      loc_id: number
      loc_name: string
      loc_desc: string | null
      loc_createdAt: Date
      loc_updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `loc_id`
     * const locationWithLoc_idOnly = await prisma.location.findMany({ select: { loc_id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Location$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Location$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly loc_id: FieldRef<"Location", 'Int'>
    readonly loc_name: FieldRef<"Location", 'String'>
    readonly loc_desc: FieldRef<"Location", 'String'>
    readonly loc_createdAt: FieldRef<"Location", 'DateTime'>
    readonly loc_updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.inventories
   */
  export type Location$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Bin
   */

  export type AggregateBin = {
    _count: BinCountAggregateOutputType | null
    _avg: BinAvgAggregateOutputType | null
    _sum: BinSumAggregateOutputType | null
    _min: BinMinAggregateOutputType | null
    _max: BinMaxAggregateOutputType | null
  }

  export type BinAvgAggregateOutputType = {
    bin_id: number | null
  }

  export type BinSumAggregateOutputType = {
    bin_id: number | null
  }

  export type BinMinAggregateOutputType = {
    bin_id: number | null
    bin_name: string | null
    bin_desc: string | null
    bin_createdAt: Date | null
    bin_updatedAt: Date | null
  }

  export type BinMaxAggregateOutputType = {
    bin_id: number | null
    bin_name: string | null
    bin_desc: string | null
    bin_createdAt: Date | null
    bin_updatedAt: Date | null
  }

  export type BinCountAggregateOutputType = {
    bin_id: number
    bin_name: number
    bin_desc: number
    bin_createdAt: number
    bin_updatedAt: number
    _all: number
  }


  export type BinAvgAggregateInputType = {
    bin_id?: true
  }

  export type BinSumAggregateInputType = {
    bin_id?: true
  }

  export type BinMinAggregateInputType = {
    bin_id?: true
    bin_name?: true
    bin_desc?: true
    bin_createdAt?: true
    bin_updatedAt?: true
  }

  export type BinMaxAggregateInputType = {
    bin_id?: true
    bin_name?: true
    bin_desc?: true
    bin_createdAt?: true
    bin_updatedAt?: true
  }

  export type BinCountAggregateInputType = {
    bin_id?: true
    bin_name?: true
    bin_desc?: true
    bin_createdAt?: true
    bin_updatedAt?: true
    _all?: true
  }

  export type BinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bin to aggregate.
     */
    where?: BinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bins to fetch.
     */
    orderBy?: BinOrderByWithRelationInput | BinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bins
    **/
    _count?: true | BinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BinMaxAggregateInputType
  }

  export type GetBinAggregateType<T extends BinAggregateArgs> = {
        [P in keyof T & keyof AggregateBin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBin[P]>
      : GetScalarType<T[P], AggregateBin[P]>
  }




  export type BinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BinWhereInput
    orderBy?: BinOrderByWithAggregationInput | BinOrderByWithAggregationInput[]
    by: BinScalarFieldEnum[] | BinScalarFieldEnum
    having?: BinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BinCountAggregateInputType | true
    _avg?: BinAvgAggregateInputType
    _sum?: BinSumAggregateInputType
    _min?: BinMinAggregateInputType
    _max?: BinMaxAggregateInputType
  }

  export type BinGroupByOutputType = {
    bin_id: number
    bin_name: string
    bin_desc: string | null
    bin_createdAt: Date
    bin_updatedAt: Date
    _count: BinCountAggregateOutputType | null
    _avg: BinAvgAggregateOutputType | null
    _sum: BinSumAggregateOutputType | null
    _min: BinMinAggregateOutputType | null
    _max: BinMaxAggregateOutputType | null
  }

  type GetBinGroupByPayload<T extends BinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BinGroupByOutputType[P]>
            : GetScalarType<T[P], BinGroupByOutputType[P]>
        }
      >
    >


  export type BinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bin_id?: boolean
    bin_name?: boolean
    bin_desc?: boolean
    bin_createdAt?: boolean
    bin_updatedAt?: boolean
    inventories?: boolean | Bin$inventoriesArgs<ExtArgs>
    _count?: boolean | BinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bin"]>



  export type BinSelectScalar = {
    bin_id?: boolean
    bin_name?: boolean
    bin_desc?: boolean
    bin_createdAt?: boolean
    bin_updatedAt?: boolean
  }

  export type BinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bin_id" | "bin_name" | "bin_desc" | "bin_createdAt" | "bin_updatedAt", ExtArgs["result"]["bin"]>
  export type BinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Bin$inventoriesArgs<ExtArgs>
    _count?: boolean | BinCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bin"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bin_id: number
      bin_name: string
      bin_desc: string | null
      bin_createdAt: Date
      bin_updatedAt: Date
    }, ExtArgs["result"]["bin"]>
    composites: {}
  }

  type BinGetPayload<S extends boolean | null | undefined | BinDefaultArgs> = $Result.GetResult<Prisma.$BinPayload, S>

  type BinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BinCountAggregateInputType | true
    }

  export interface BinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bin'], meta: { name: 'Bin' } }
    /**
     * Find zero or one Bin that matches the filter.
     * @param {BinFindUniqueArgs} args - Arguments to find a Bin
     * @example
     * // Get one Bin
     * const bin = await prisma.bin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BinFindUniqueArgs>(args: SelectSubset<T, BinFindUniqueArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BinFindUniqueOrThrowArgs} args - Arguments to find a Bin
     * @example
     * // Get one Bin
     * const bin = await prisma.bin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BinFindUniqueOrThrowArgs>(args: SelectSubset<T, BinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinFindFirstArgs} args - Arguments to find a Bin
     * @example
     * // Get one Bin
     * const bin = await prisma.bin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BinFindFirstArgs>(args?: SelectSubset<T, BinFindFirstArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinFindFirstOrThrowArgs} args - Arguments to find a Bin
     * @example
     * // Get one Bin
     * const bin = await prisma.bin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BinFindFirstOrThrowArgs>(args?: SelectSubset<T, BinFindFirstOrThrowArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bins
     * const bins = await prisma.bin.findMany()
     * 
     * // Get first 10 Bins
     * const bins = await prisma.bin.findMany({ take: 10 })
     * 
     * // Only select the `bin_id`
     * const binWithBin_idOnly = await prisma.bin.findMany({ select: { bin_id: true } })
     * 
     */
    findMany<T extends BinFindManyArgs>(args?: SelectSubset<T, BinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bin.
     * @param {BinCreateArgs} args - Arguments to create a Bin.
     * @example
     * // Create one Bin
     * const Bin = await prisma.bin.create({
     *   data: {
     *     // ... data to create a Bin
     *   }
     * })
     * 
     */
    create<T extends BinCreateArgs>(args: SelectSubset<T, BinCreateArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bins.
     * @param {BinCreateManyArgs} args - Arguments to create many Bins.
     * @example
     * // Create many Bins
     * const bin = await prisma.bin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BinCreateManyArgs>(args?: SelectSubset<T, BinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bin.
     * @param {BinDeleteArgs} args - Arguments to delete one Bin.
     * @example
     * // Delete one Bin
     * const Bin = await prisma.bin.delete({
     *   where: {
     *     // ... filter to delete one Bin
     *   }
     * })
     * 
     */
    delete<T extends BinDeleteArgs>(args: SelectSubset<T, BinDeleteArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bin.
     * @param {BinUpdateArgs} args - Arguments to update one Bin.
     * @example
     * // Update one Bin
     * const bin = await prisma.bin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BinUpdateArgs>(args: SelectSubset<T, BinUpdateArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bins.
     * @param {BinDeleteManyArgs} args - Arguments to filter Bins to delete.
     * @example
     * // Delete a few Bins
     * const { count } = await prisma.bin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BinDeleteManyArgs>(args?: SelectSubset<T, BinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bins
     * const bin = await prisma.bin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BinUpdateManyArgs>(args: SelectSubset<T, BinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bin.
     * @param {BinUpsertArgs} args - Arguments to update or create a Bin.
     * @example
     * // Update or create a Bin
     * const bin = await prisma.bin.upsert({
     *   create: {
     *     // ... data to create a Bin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bin we want to update
     *   }
     * })
     */
    upsert<T extends BinUpsertArgs>(args: SelectSubset<T, BinUpsertArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinCountArgs} args - Arguments to filter Bins to count.
     * @example
     * // Count the number of Bins
     * const count = await prisma.bin.count({
     *   where: {
     *     // ... the filter for the Bins we want to count
     *   }
     * })
    **/
    count<T extends BinCountArgs>(
      args?: Subset<T, BinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BinAggregateArgs>(args: Subset<T, BinAggregateArgs>): Prisma.PrismaPromise<GetBinAggregateType<T>>

    /**
     * Group by Bin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BinGroupByArgs['orderBy'] }
        : { orderBy?: BinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bin model
   */
  readonly fields: BinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Bin$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Bin$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bin model
   */
  interface BinFieldRefs {
    readonly bin_id: FieldRef<"Bin", 'Int'>
    readonly bin_name: FieldRef<"Bin", 'String'>
    readonly bin_desc: FieldRef<"Bin", 'String'>
    readonly bin_createdAt: FieldRef<"Bin", 'DateTime'>
    readonly bin_updatedAt: FieldRef<"Bin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bin findUnique
   */
  export type BinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter, which Bin to fetch.
     */
    where: BinWhereUniqueInput
  }

  /**
   * Bin findUniqueOrThrow
   */
  export type BinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter, which Bin to fetch.
     */
    where: BinWhereUniqueInput
  }

  /**
   * Bin findFirst
   */
  export type BinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter, which Bin to fetch.
     */
    where?: BinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bins to fetch.
     */
    orderBy?: BinOrderByWithRelationInput | BinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bins.
     */
    cursor?: BinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bins.
     */
    distinct?: BinScalarFieldEnum | BinScalarFieldEnum[]
  }

  /**
   * Bin findFirstOrThrow
   */
  export type BinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter, which Bin to fetch.
     */
    where?: BinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bins to fetch.
     */
    orderBy?: BinOrderByWithRelationInput | BinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bins.
     */
    cursor?: BinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bins.
     */
    distinct?: BinScalarFieldEnum | BinScalarFieldEnum[]
  }

  /**
   * Bin findMany
   */
  export type BinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter, which Bins to fetch.
     */
    where?: BinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bins to fetch.
     */
    orderBy?: BinOrderByWithRelationInput | BinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bins.
     */
    cursor?: BinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bins.
     */
    skip?: number
    distinct?: BinScalarFieldEnum | BinScalarFieldEnum[]
  }

  /**
   * Bin create
   */
  export type BinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * The data needed to create a Bin.
     */
    data: XOR<BinCreateInput, BinUncheckedCreateInput>
  }

  /**
   * Bin createMany
   */
  export type BinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bins.
     */
    data: BinCreateManyInput | BinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bin update
   */
  export type BinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * The data needed to update a Bin.
     */
    data: XOR<BinUpdateInput, BinUncheckedUpdateInput>
    /**
     * Choose, which Bin to update.
     */
    where: BinWhereUniqueInput
  }

  /**
   * Bin updateMany
   */
  export type BinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bins.
     */
    data: XOR<BinUpdateManyMutationInput, BinUncheckedUpdateManyInput>
    /**
     * Filter which Bins to update
     */
    where?: BinWhereInput
    /**
     * Limit how many Bins to update.
     */
    limit?: number
  }

  /**
   * Bin upsert
   */
  export type BinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * The filter to search for the Bin to update in case it exists.
     */
    where: BinWhereUniqueInput
    /**
     * In case the Bin found by the `where` argument doesn't exist, create a new Bin with this data.
     */
    create: XOR<BinCreateInput, BinUncheckedCreateInput>
    /**
     * In case the Bin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BinUpdateInput, BinUncheckedUpdateInput>
  }

  /**
   * Bin delete
   */
  export type BinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    /**
     * Filter which Bin to delete.
     */
    where: BinWhereUniqueInput
  }

  /**
   * Bin deleteMany
   */
  export type BinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bins to delete
     */
    where?: BinWhereInput
    /**
     * Limit how many Bins to delete.
     */
    limit?: number
  }

  /**
   * Bin.inventories
   */
  export type Bin$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Bin without action
   */
  export type BinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    store_id: number | null
  }

  export type StoreSumAggregateOutputType = {
    store_id: number | null
  }

  export type StoreMinAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    store_desc: string | null
    store_createdAt: Date | null
    store_updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    store_desc: string | null
    store_createdAt: Date | null
    store_updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    store_id: number
    store_name: number
    store_desc: number
    store_createdAt: number
    store_updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    store_id?: true
  }

  export type StoreSumAggregateInputType = {
    store_id?: true
  }

  export type StoreMinAggregateInputType = {
    store_id?: true
    store_name?: true
    store_desc?: true
    store_createdAt?: true
    store_updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    store_id?: true
    store_name?: true
    store_desc?: true
    store_createdAt?: true
    store_updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    store_id?: true
    store_name?: true
    store_desc?: true
    store_createdAt?: true
    store_updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    store_id: number
    store_name: string
    store_desc: string | null
    store_createdAt: Date
    store_updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    store_desc?: boolean
    store_createdAt?: boolean
    store_updatedAt?: boolean
    inventories?: boolean | Store$inventoriesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    store_id?: boolean
    store_name?: boolean
    store_desc?: boolean
    store_createdAt?: boolean
    store_updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "store_name" | "store_desc" | "store_createdAt" | "store_updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Store$inventoriesArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      store_name: string
      store_desc: string | null
      store_createdAt: Date
      store_updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storeWithStore_idOnly = await prisma.store.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Store$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Store$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly store_id: FieldRef<"Store", 'Int'>
    readonly store_name: FieldRef<"Store", 'String'>
    readonly store_desc: FieldRef<"Store", 'String'>
    readonly store_createdAt: FieldRef<"Store", 'DateTime'>
    readonly store_updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.inventories
   */
  export type Store$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    prod_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    prod_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    prod_id: number | null
    prod_name: string | null
    prod_desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    prod_id: number | null
    prod_name: string | null
    prod_desc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    prod_id: number
    prod_name: number
    prod_desc: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    prod_id?: true
  }

  export type ProductSumAggregateInputType = {
    prod_id?: true
  }

  export type ProductMinAggregateInputType = {
    prod_id?: true
    prod_name?: true
    prod_desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    prod_id?: true
    prod_name?: true
    prod_desc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    prod_id?: true
    prod_name?: true
    prod_desc?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    prod_id: number
    prod_name: string
    prod_desc: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prod_id?: boolean
    prod_name?: boolean
    prod_desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inventories?: boolean | Product$inventoriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    prod_id?: boolean
    prod_name?: boolean
    prod_desc?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prod_id" | "prod_name" | "prod_desc" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Product$inventoriesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      prod_id: number
      prod_name: string
      prod_desc: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `prod_id`
     * const productWithProd_idOnly = await prisma.product.findMany({ select: { prod_id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Product$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly prod_id: FieldRef<"Product", 'Int'>
    readonly prod_name: FieldRef<"Product", 'String'>
    readonly prod_desc: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.inventories
   */
  export type Product$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    inv_id: number | null
    prod_id: number | null
    inv_quantity: number | null
    inv_restock: number | null
    inv_trigger: number | null
    bin_id: number | null
    loc_id: number | null
    store_id: number | null
  }

  export type InventorySumAggregateOutputType = {
    inv_id: number | null
    prod_id: number | null
    inv_quantity: number | null
    inv_restock: number | null
    inv_trigger: number | null
    bin_id: number | null
    loc_id: number | null
    store_id: number | null
  }

  export type InventoryMinAggregateOutputType = {
    inv_id: number | null
    prod_id: number | null
    inv_quantity: number | null
    inv_restock: number | null
    inv_trigger: number | null
    inv_status: $Enums.InventoryStatus | null
    inv_createdAt: Date | null
    inv_updatedAt: Date | null
    checkedBin: boolean | null
    bin_id: number | null
    loc_id: number | null
    store_id: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    inv_id: number | null
    prod_id: number | null
    inv_quantity: number | null
    inv_restock: number | null
    inv_trigger: number | null
    inv_status: $Enums.InventoryStatus | null
    inv_createdAt: Date | null
    inv_updatedAt: Date | null
    checkedBin: boolean | null
    bin_id: number | null
    loc_id: number | null
    store_id: number | null
  }

  export type InventoryCountAggregateOutputType = {
    inv_id: number
    prod_id: number
    inv_quantity: number
    inv_restock: number
    inv_trigger: number
    inv_status: number
    inv_createdAt: number
    inv_updatedAt: number
    checkedBin: number
    bin_id: number
    loc_id: number
    store_id: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    inv_id?: true
    prod_id?: true
    inv_quantity?: true
    inv_restock?: true
    inv_trigger?: true
    bin_id?: true
    loc_id?: true
    store_id?: true
  }

  export type InventorySumAggregateInputType = {
    inv_id?: true
    prod_id?: true
    inv_quantity?: true
    inv_restock?: true
    inv_trigger?: true
    bin_id?: true
    loc_id?: true
    store_id?: true
  }

  export type InventoryMinAggregateInputType = {
    inv_id?: true
    prod_id?: true
    inv_quantity?: true
    inv_restock?: true
    inv_trigger?: true
    inv_status?: true
    inv_createdAt?: true
    inv_updatedAt?: true
    checkedBin?: true
    bin_id?: true
    loc_id?: true
    store_id?: true
  }

  export type InventoryMaxAggregateInputType = {
    inv_id?: true
    prod_id?: true
    inv_quantity?: true
    inv_restock?: true
    inv_trigger?: true
    inv_status?: true
    inv_createdAt?: true
    inv_updatedAt?: true
    checkedBin?: true
    bin_id?: true
    loc_id?: true
    store_id?: true
  }

  export type InventoryCountAggregateInputType = {
    inv_id?: true
    prod_id?: true
    inv_quantity?: true
    inv_restock?: true
    inv_trigger?: true
    inv_status?: true
    inv_createdAt?: true
    inv_updatedAt?: true
    checkedBin?: true
    bin_id?: true
    loc_id?: true
    store_id?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    inv_id: number
    prod_id: number
    inv_quantity: number
    inv_restock: number
    inv_trigger: number
    inv_status: $Enums.InventoryStatus
    inv_createdAt: Date
    inv_updatedAt: Date
    checkedBin: boolean | null
    bin_id: number | null
    loc_id: number | null
    store_id: number | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inv_id?: boolean
    prod_id?: boolean
    inv_quantity?: boolean
    inv_restock?: boolean
    inv_trigger?: boolean
    inv_status?: boolean
    inv_createdAt?: boolean
    inv_updatedAt?: boolean
    checkedBin?: boolean
    bin_id?: boolean
    loc_id?: boolean
    store_id?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    bin?: boolean | Inventory$binArgs<ExtArgs>
    location?: boolean | Inventory$locationArgs<ExtArgs>
    store?: boolean | Inventory$storeArgs<ExtArgs>
    transactions?: boolean | Inventory$transactionsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type InventorySelectScalar = {
    inv_id?: boolean
    prod_id?: boolean
    inv_quantity?: boolean
    inv_restock?: boolean
    inv_trigger?: boolean
    inv_status?: boolean
    inv_createdAt?: boolean
    inv_updatedAt?: boolean
    checkedBin?: boolean
    bin_id?: boolean
    loc_id?: boolean
    store_id?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inv_id" | "prod_id" | "inv_quantity" | "inv_restock" | "inv_trigger" | "inv_status" | "inv_createdAt" | "inv_updatedAt" | "checkedBin" | "bin_id" | "loc_id" | "store_id", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    bin?: boolean | Inventory$binArgs<ExtArgs>
    location?: boolean | Inventory$locationArgs<ExtArgs>
    store?: boolean | Inventory$storeArgs<ExtArgs>
    transactions?: boolean | Inventory$transactionsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      bin: Prisma.$BinPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
      store: Prisma.$StorePayload<ExtArgs> | null
      transactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      inv_id: number
      prod_id: number
      inv_quantity: number
      inv_restock: number
      inv_trigger: number
      inv_status: $Enums.InventoryStatus
      inv_createdAt: Date
      inv_updatedAt: Date
      checkedBin: boolean | null
      bin_id: number | null
      loc_id: number | null
      store_id: number | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `inv_id`
     * const inventoryWithInv_idOnly = await prisma.inventory.findMany({ select: { inv_id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bin<T extends Inventory$binArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$binArgs<ExtArgs>>): Prisma__BinClient<$Result.GetResult<Prisma.$BinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends Inventory$locationArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    store<T extends Inventory$storeArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Inventory$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly inv_id: FieldRef<"Inventory", 'Int'>
    readonly prod_id: FieldRef<"Inventory", 'Int'>
    readonly inv_quantity: FieldRef<"Inventory", 'Int'>
    readonly inv_restock: FieldRef<"Inventory", 'Int'>
    readonly inv_trigger: FieldRef<"Inventory", 'Int'>
    readonly inv_status: FieldRef<"Inventory", 'InventoryStatus'>
    readonly inv_createdAt: FieldRef<"Inventory", 'DateTime'>
    readonly inv_updatedAt: FieldRef<"Inventory", 'DateTime'>
    readonly checkedBin: FieldRef<"Inventory", 'Boolean'>
    readonly bin_id: FieldRef<"Inventory", 'Int'>
    readonly loc_id: FieldRef<"Inventory", 'Int'>
    readonly store_id: FieldRef<"Inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.bin
   */
  export type Inventory$binArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bin
     */
    select?: BinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bin
     */
    omit?: BinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BinInclude<ExtArgs> | null
    where?: BinWhereInput
  }

  /**
   * Inventory.location
   */
  export type Inventory$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Inventory.store
   */
  export type Inventory$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Inventory.transactions
   */
  export type Inventory$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransaction
   */

  export type AggregateInventoryTransaction = {
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  export type InventoryTransactionAvgAggregateOutputType = {
    invtran_id: number | null
    inv_id: number | null
    invtran_change: number | null
  }

  export type InventoryTransactionSumAggregateOutputType = {
    invtran_id: number | null
    inv_id: number | null
    invtran_change: number | null
  }

  export type InventoryTransactionMinAggregateOutputType = {
    invtran_id: number | null
    inv_id: number | null
    invtran_change: number | null
    invtran_type: $Enums.InvTranType | null
    invtran_note: string | null
    invtran_createdAt: Date | null
  }

  export type InventoryTransactionMaxAggregateOutputType = {
    invtran_id: number | null
    inv_id: number | null
    invtran_change: number | null
    invtran_type: $Enums.InvTranType | null
    invtran_note: string | null
    invtran_createdAt: Date | null
  }

  export type InventoryTransactionCountAggregateOutputType = {
    invtran_id: number
    inv_id: number
    invtran_change: number
    invtran_type: number
    invtran_note: number
    invtran_createdAt: number
    _all: number
  }


  export type InventoryTransactionAvgAggregateInputType = {
    invtran_id?: true
    inv_id?: true
    invtran_change?: true
  }

  export type InventoryTransactionSumAggregateInputType = {
    invtran_id?: true
    inv_id?: true
    invtran_change?: true
  }

  export type InventoryTransactionMinAggregateInputType = {
    invtran_id?: true
    inv_id?: true
    invtran_change?: true
    invtran_type?: true
    invtran_note?: true
    invtran_createdAt?: true
  }

  export type InventoryTransactionMaxAggregateInputType = {
    invtran_id?: true
    inv_id?: true
    invtran_change?: true
    invtran_type?: true
    invtran_note?: true
    invtran_createdAt?: true
  }

  export type InventoryTransactionCountAggregateInputType = {
    invtran_id?: true
    inv_id?: true
    invtran_change?: true
    invtran_type?: true
    invtran_note?: true
    invtran_createdAt?: true
    _all?: true
  }

  export type InventoryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransaction to aggregate.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransactions
    **/
    _count?: true | InventoryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type GetInventoryTransactionAggregateType<T extends InventoryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransaction[P]>
      : GetScalarType<T[P], AggregateInventoryTransaction[P]>
  }




  export type InventoryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithAggregationInput | InventoryTransactionOrderByWithAggregationInput[]
    by: InventoryTransactionScalarFieldEnum[] | InventoryTransactionScalarFieldEnum
    having?: InventoryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionCountAggregateInputType | true
    _avg?: InventoryTransactionAvgAggregateInputType
    _sum?: InventoryTransactionSumAggregateInputType
    _min?: InventoryTransactionMinAggregateInputType
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type InventoryTransactionGroupByOutputType = {
    invtran_id: number
    inv_id: number
    invtran_change: number
    invtran_type: $Enums.InvTranType
    invtran_note: string | null
    invtran_createdAt: Date
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  type GetInventoryTransactionGroupByPayload<T extends InventoryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    invtran_id?: boolean
    inv_id?: boolean
    invtran_change?: boolean
    invtran_type?: boolean
    invtran_note?: boolean
    invtran_createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransaction"]>



  export type InventoryTransactionSelectScalar = {
    invtran_id?: boolean
    inv_id?: boolean
    invtran_change?: boolean
    invtran_type?: boolean
    invtran_note?: boolean
    invtran_createdAt?: boolean
  }

  export type InventoryTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"invtran_id" | "inv_id" | "invtran_change" | "invtran_type" | "invtran_note" | "invtran_createdAt", ExtArgs["result"]["inventoryTransaction"]>
  export type InventoryTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransaction"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      invtran_id: number
      inv_id: number
      invtran_change: number
      invtran_type: $Enums.InvTranType
      invtran_note: string | null
      invtran_createdAt: Date
    }, ExtArgs["result"]["inventoryTransaction"]>
    composites: {}
  }

  type InventoryTransactionGetPayload<S extends boolean | null | undefined | InventoryTransactionDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransactionPayload, S>

  type InventoryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryTransactionCountAggregateInputType | true
    }

  export interface InventoryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransaction'], meta: { name: 'InventoryTransaction' } }
    /**
     * Find zero or one InventoryTransaction that matches the filter.
     * @param {InventoryTransactionFindUniqueArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransactionFindUniqueArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryTransactionFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransactionFindFirstArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `invtran_id`
     * const inventoryTransactionWithInvtran_idOnly = await prisma.inventoryTransaction.findMany({ select: { invtran_id: true } })
     * 
     */
    findMany<T extends InventoryTransactionFindManyArgs>(args?: SelectSubset<T, InventoryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryTransaction.
     * @param {InventoryTransactionCreateArgs} args - Arguments to create a InventoryTransaction.
     * @example
     * // Create one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.create({
     *   data: {
     *     // ... data to create a InventoryTransaction
     *   }
     * })
     * 
     */
    create<T extends InventoryTransactionCreateArgs>(args: SelectSubset<T, InventoryTransactionCreateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryTransactions.
     * @param {InventoryTransactionCreateManyArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransactionCreateManyArgs>(args?: SelectSubset<T, InventoryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryTransaction.
     * @param {InventoryTransactionDeleteArgs} args - Arguments to delete one InventoryTransaction.
     * @example
     * // Delete one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransaction
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransactionDeleteArgs>(args: SelectSubset<T, InventoryTransactionDeleteArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryTransaction.
     * @param {InventoryTransactionUpdateArgs} args - Arguments to update one InventoryTransaction.
     * @example
     * // Update one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransactionUpdateArgs>(args: SelectSubset<T, InventoryTransactionUpdateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransactionDeleteManyArgs>(args?: SelectSubset<T, InventoryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransactionUpdateManyArgs>(args: SelectSubset<T, InventoryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransaction.
     * @param {InventoryTransactionUpsertArgs} args - Arguments to update or create a InventoryTransaction.
     * @example
     * // Update or create a InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.upsert({
     *   create: {
     *     // ... data to create a InventoryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransactionUpsertArgs>(args: SelectSubset<T, InventoryTransactionUpsertArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransaction.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionCountArgs>(
      args?: Subset<T, InventoryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryTransactionAggregateArgs>(args: Subset<T, InventoryTransactionAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionAggregateType<T>>

    /**
     * Group by InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransaction model
   */
  readonly fields: InventoryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryTransaction model
   */
  interface InventoryTransactionFieldRefs {
    readonly invtran_id: FieldRef<"InventoryTransaction", 'Int'>
    readonly inv_id: FieldRef<"InventoryTransaction", 'Int'>
    readonly invtran_change: FieldRef<"InventoryTransaction", 'Int'>
    readonly invtran_type: FieldRef<"InventoryTransaction", 'InvTranType'>
    readonly invtran_note: FieldRef<"InventoryTransaction", 'String'>
    readonly invtran_createdAt: FieldRef<"InventoryTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransaction findUnique
   */
  export type InventoryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findUniqueOrThrow
   */
  export type InventoryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findFirst
   */
  export type InventoryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findFirstOrThrow
   */
  export type InventoryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findMany
   */
  export type InventoryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction create
   */
  export type InventoryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransaction.
     */
    data: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
  }

  /**
   * InventoryTransaction createMany
   */
  export type InventoryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionCreateManyInput | InventoryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransaction update
   */
  export type InventoryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransaction.
     */
    data: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransaction to update.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction updateMany
   */
  export type InventoryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionWhereInput
    /**
     * Limit how many InventoryTransactions to update.
     */
    limit?: number
  }

  /**
   * InventoryTransaction upsert
   */
  export type InventoryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransaction to update in case it exists.
     */
    where: InventoryTransactionWhereUniqueInput
    /**
     * In case the InventoryTransaction found by the `where` argument doesn't exist, create a new InventoryTransaction with this data.
     */
    create: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
    /**
     * In case the InventoryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
  }

  /**
   * InventoryTransaction delete
   */
  export type InventoryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter which InventoryTransaction to delete.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction deleteMany
   */
  export type InventoryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionWhereInput
    /**
     * Limit how many InventoryTransactions to delete.
     */
    limit?: number
  }

  /**
   * InventoryTransaction without action
   */
  export type InventoryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryTransaction
     */
    omit?: InventoryTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LocationScalarFieldEnum: {
    loc_id: 'loc_id',
    loc_name: 'loc_name',
    loc_desc: 'loc_desc',
    loc_createdAt: 'loc_createdAt',
    loc_updatedAt: 'loc_updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const BinScalarFieldEnum: {
    bin_id: 'bin_id',
    bin_name: 'bin_name',
    bin_desc: 'bin_desc',
    bin_createdAt: 'bin_createdAt',
    bin_updatedAt: 'bin_updatedAt'
  };

  export type BinScalarFieldEnum = (typeof BinScalarFieldEnum)[keyof typeof BinScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    store_id: 'store_id',
    store_name: 'store_name',
    store_desc: 'store_desc',
    store_createdAt: 'store_createdAt',
    store_updatedAt: 'store_updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    prod_id: 'prod_id',
    prod_name: 'prod_name',
    prod_desc: 'prod_desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    inv_id: 'inv_id',
    prod_id: 'prod_id',
    inv_quantity: 'inv_quantity',
    inv_restock: 'inv_restock',
    inv_trigger: 'inv_trigger',
    inv_status: 'inv_status',
    inv_createdAt: 'inv_createdAt',
    inv_updatedAt: 'inv_updatedAt',
    checkedBin: 'checkedBin',
    bin_id: 'bin_id',
    loc_id: 'loc_id',
    store_id: 'store_id'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryTransactionScalarFieldEnum: {
    invtran_id: 'invtran_id',
    inv_id: 'inv_id',
    invtran_change: 'invtran_change',
    invtran_type: 'invtran_type',
    invtran_note: 'invtran_note',
    invtran_createdAt: 'invtran_createdAt'
  };

  export type InventoryTransactionScalarFieldEnum = (typeof InventoryTransactionScalarFieldEnum)[keyof typeof InventoryTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const LocationOrderByRelevanceFieldEnum: {
    loc_name: 'loc_name',
    loc_desc: 'loc_desc'
  };

  export type LocationOrderByRelevanceFieldEnum = (typeof LocationOrderByRelevanceFieldEnum)[keyof typeof LocationOrderByRelevanceFieldEnum]


  export const BinOrderByRelevanceFieldEnum: {
    bin_name: 'bin_name',
    bin_desc: 'bin_desc'
  };

  export type BinOrderByRelevanceFieldEnum = (typeof BinOrderByRelevanceFieldEnum)[keyof typeof BinOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    store_name: 'store_name',
    store_desc: 'store_desc'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    prod_name: 'prod_name',
    prod_desc: 'prod_desc'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const InventoryTransactionOrderByRelevanceFieldEnum: {
    invtran_note: 'invtran_note'
  };

  export type InventoryTransactionOrderByRelevanceFieldEnum = (typeof InventoryTransactionOrderByRelevanceFieldEnum)[keyof typeof InventoryTransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'InventoryStatus'
   */
  export type EnumInventoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InvTranType'
   */
  export type EnumInvTranTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvTranType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    loc_id?: IntFilter<"Location"> | number
    loc_name?: StringFilter<"Location"> | string
    loc_desc?: StringNullableFilter<"Location"> | string | null
    loc_createdAt?: DateTimeFilter<"Location"> | Date | string
    loc_updatedAt?: DateTimeFilter<"Location"> | Date | string
    inventories?: InventoryListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    loc_id?: SortOrder
    loc_name?: SortOrder
    loc_desc?: SortOrderInput | SortOrder
    loc_createdAt?: SortOrder
    loc_updatedAt?: SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
    _relevance?: LocationOrderByRelevanceInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    loc_id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    loc_name?: StringFilter<"Location"> | string
    loc_desc?: StringNullableFilter<"Location"> | string | null
    loc_createdAt?: DateTimeFilter<"Location"> | Date | string
    loc_updatedAt?: DateTimeFilter<"Location"> | Date | string
    inventories?: InventoryListRelationFilter
  }, "loc_id">

  export type LocationOrderByWithAggregationInput = {
    loc_id?: SortOrder
    loc_name?: SortOrder
    loc_desc?: SortOrderInput | SortOrder
    loc_createdAt?: SortOrder
    loc_updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    loc_id?: IntWithAggregatesFilter<"Location"> | number
    loc_name?: StringWithAggregatesFilter<"Location"> | string
    loc_desc?: StringNullableWithAggregatesFilter<"Location"> | string | null
    loc_createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    loc_updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type BinWhereInput = {
    AND?: BinWhereInput | BinWhereInput[]
    OR?: BinWhereInput[]
    NOT?: BinWhereInput | BinWhereInput[]
    bin_id?: IntFilter<"Bin"> | number
    bin_name?: StringFilter<"Bin"> | string
    bin_desc?: StringNullableFilter<"Bin"> | string | null
    bin_createdAt?: DateTimeFilter<"Bin"> | Date | string
    bin_updatedAt?: DateTimeFilter<"Bin"> | Date | string
    inventories?: InventoryListRelationFilter
  }

  export type BinOrderByWithRelationInput = {
    bin_id?: SortOrder
    bin_name?: SortOrder
    bin_desc?: SortOrderInput | SortOrder
    bin_createdAt?: SortOrder
    bin_updatedAt?: SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
    _relevance?: BinOrderByRelevanceInput
  }

  export type BinWhereUniqueInput = Prisma.AtLeast<{
    bin_id?: number
    AND?: BinWhereInput | BinWhereInput[]
    OR?: BinWhereInput[]
    NOT?: BinWhereInput | BinWhereInput[]
    bin_name?: StringFilter<"Bin"> | string
    bin_desc?: StringNullableFilter<"Bin"> | string | null
    bin_createdAt?: DateTimeFilter<"Bin"> | Date | string
    bin_updatedAt?: DateTimeFilter<"Bin"> | Date | string
    inventories?: InventoryListRelationFilter
  }, "bin_id">

  export type BinOrderByWithAggregationInput = {
    bin_id?: SortOrder
    bin_name?: SortOrder
    bin_desc?: SortOrderInput | SortOrder
    bin_createdAt?: SortOrder
    bin_updatedAt?: SortOrder
    _count?: BinCountOrderByAggregateInput
    _avg?: BinAvgOrderByAggregateInput
    _max?: BinMaxOrderByAggregateInput
    _min?: BinMinOrderByAggregateInput
    _sum?: BinSumOrderByAggregateInput
  }

  export type BinScalarWhereWithAggregatesInput = {
    AND?: BinScalarWhereWithAggregatesInput | BinScalarWhereWithAggregatesInput[]
    OR?: BinScalarWhereWithAggregatesInput[]
    NOT?: BinScalarWhereWithAggregatesInput | BinScalarWhereWithAggregatesInput[]
    bin_id?: IntWithAggregatesFilter<"Bin"> | number
    bin_name?: StringWithAggregatesFilter<"Bin"> | string
    bin_desc?: StringNullableWithAggregatesFilter<"Bin"> | string | null
    bin_createdAt?: DateTimeWithAggregatesFilter<"Bin"> | Date | string
    bin_updatedAt?: DateTimeWithAggregatesFilter<"Bin"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    store_id?: IntFilter<"Store"> | number
    store_name?: StringFilter<"Store"> | string
    store_desc?: StringNullableFilter<"Store"> | string | null
    store_createdAt?: DateTimeFilter<"Store"> | Date | string
    store_updatedAt?: DateTimeFilter<"Store"> | Date | string
    inventories?: InventoryListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    store_desc?: SortOrderInput | SortOrder
    store_createdAt?: SortOrder
    store_updatedAt?: SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    store_name?: StringFilter<"Store"> | string
    store_desc?: StringNullableFilter<"Store"> | string | null
    store_createdAt?: DateTimeFilter<"Store"> | Date | string
    store_updatedAt?: DateTimeFilter<"Store"> | Date | string
    inventories?: InventoryListRelationFilter
  }, "store_id">

  export type StoreOrderByWithAggregationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    store_desc?: SortOrderInput | SortOrder
    store_createdAt?: SortOrder
    store_updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"Store"> | number
    store_name?: StringWithAggregatesFilter<"Store"> | string
    store_desc?: StringNullableWithAggregatesFilter<"Store"> | string | null
    store_createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    store_updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    prod_id?: IntFilter<"Product"> | number
    prod_name?: StringFilter<"Product"> | string
    prod_desc?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    inventories?: InventoryListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    prod_id?: SortOrder
    prod_name?: SortOrder
    prod_desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    prod_id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    prod_name?: StringFilter<"Product"> | string
    prod_desc?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    inventories?: InventoryListRelationFilter
  }, "prod_id">

  export type ProductOrderByWithAggregationInput = {
    prod_id?: SortOrder
    prod_name?: SortOrder
    prod_desc?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    prod_id?: IntWithAggregatesFilter<"Product"> | number
    prod_name?: StringWithAggregatesFilter<"Product"> | string
    prod_desc?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    inv_id?: IntFilter<"Inventory"> | number
    prod_id?: IntFilter<"Inventory"> | number
    inv_quantity?: IntFilter<"Inventory"> | number
    inv_restock?: IntFilter<"Inventory"> | number
    inv_trigger?: IntFilter<"Inventory"> | number
    inv_status?: EnumInventoryStatusFilter<"Inventory"> | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFilter<"Inventory"> | Date | string
    inv_updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    checkedBin?: BoolNullableFilter<"Inventory"> | boolean | null
    bin_id?: IntNullableFilter<"Inventory"> | number | null
    loc_id?: IntNullableFilter<"Inventory"> | number | null
    store_id?: IntNullableFilter<"Inventory"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    bin?: XOR<BinNullableScalarRelationFilter, BinWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    transactions?: InventoryTransactionListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    inv_status?: SortOrder
    inv_createdAt?: SortOrder
    inv_updatedAt?: SortOrder
    checkedBin?: SortOrderInput | SortOrder
    bin_id?: SortOrderInput | SortOrder
    loc_id?: SortOrderInput | SortOrder
    store_id?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    bin?: BinOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    transactions?: InventoryTransactionOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    inv_id?: number
    prod_id_bin_id_loc_id_store_id?: InventoryProd_idBin_idLoc_idStore_idCompoundUniqueInput
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    prod_id?: IntFilter<"Inventory"> | number
    inv_quantity?: IntFilter<"Inventory"> | number
    inv_restock?: IntFilter<"Inventory"> | number
    inv_trigger?: IntFilter<"Inventory"> | number
    inv_status?: EnumInventoryStatusFilter<"Inventory"> | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFilter<"Inventory"> | Date | string
    inv_updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    checkedBin?: BoolNullableFilter<"Inventory"> | boolean | null
    bin_id?: IntNullableFilter<"Inventory"> | number | null
    loc_id?: IntNullableFilter<"Inventory"> | number | null
    store_id?: IntNullableFilter<"Inventory"> | number | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    bin?: XOR<BinNullableScalarRelationFilter, BinWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    transactions?: InventoryTransactionListRelationFilter
  }, "inv_id" | "prod_id_bin_id_loc_id_store_id">

  export type InventoryOrderByWithAggregationInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    inv_status?: SortOrder
    inv_createdAt?: SortOrder
    inv_updatedAt?: SortOrder
    checkedBin?: SortOrderInput | SortOrder
    bin_id?: SortOrderInput | SortOrder
    loc_id?: SortOrderInput | SortOrder
    store_id?: SortOrderInput | SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    inv_id?: IntWithAggregatesFilter<"Inventory"> | number
    prod_id?: IntWithAggregatesFilter<"Inventory"> | number
    inv_quantity?: IntWithAggregatesFilter<"Inventory"> | number
    inv_restock?: IntWithAggregatesFilter<"Inventory"> | number
    inv_trigger?: IntWithAggregatesFilter<"Inventory"> | number
    inv_status?: EnumInventoryStatusWithAggregatesFilter<"Inventory"> | $Enums.InventoryStatus
    inv_createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    inv_updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    checkedBin?: BoolNullableWithAggregatesFilter<"Inventory"> | boolean | null
    bin_id?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
    loc_id?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
    store_id?: IntNullableWithAggregatesFilter<"Inventory"> | number | null
  }

  export type InventoryTransactionWhereInput = {
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    invtran_id?: IntFilter<"InventoryTransaction"> | number
    inv_id?: IntFilter<"InventoryTransaction"> | number
    invtran_change?: IntFilter<"InventoryTransaction"> | number
    invtran_type?: EnumInvTranTypeFilter<"InventoryTransaction"> | $Enums.InvTranType
    invtran_note?: StringNullableFilter<"InventoryTransaction"> | string | null
    invtran_createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type InventoryTransactionOrderByWithRelationInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
    invtran_type?: SortOrder
    invtran_note?: SortOrderInput | SortOrder
    invtran_createdAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
    _relevance?: InventoryTransactionOrderByRelevanceInput
  }

  export type InventoryTransactionWhereUniqueInput = Prisma.AtLeast<{
    invtran_id?: number
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    inv_id?: IntFilter<"InventoryTransaction"> | number
    invtran_change?: IntFilter<"InventoryTransaction"> | number
    invtran_type?: EnumInvTranTypeFilter<"InventoryTransaction"> | $Enums.InvTranType
    invtran_note?: StringNullableFilter<"InventoryTransaction"> | string | null
    invtran_createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "invtran_id">

  export type InventoryTransactionOrderByWithAggregationInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
    invtran_type?: SortOrder
    invtran_note?: SortOrderInput | SortOrder
    invtran_createdAt?: SortOrder
    _count?: InventoryTransactionCountOrderByAggregateInput
    _avg?: InventoryTransactionAvgOrderByAggregateInput
    _max?: InventoryTransactionMaxOrderByAggregateInput
    _min?: InventoryTransactionMinOrderByAggregateInput
    _sum?: InventoryTransactionSumOrderByAggregateInput
  }

  export type InventoryTransactionScalarWhereWithAggregatesInput = {
    AND?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    OR?: InventoryTransactionScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    invtran_id?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    inv_id?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    invtran_change?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    invtran_type?: EnumInvTranTypeWithAggregatesFilter<"InventoryTransaction"> | $Enums.InvTranType
    invtran_note?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    invtran_createdAt?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
  }

  export type LocationCreateInput = {
    loc_name: string
    loc_desc?: string | null
    loc_createdAt?: Date | string
    loc_updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    loc_id?: number
    loc_name: string
    loc_desc?: string | null
    loc_createdAt?: Date | string
    loc_updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    loc_id?: IntFieldUpdateOperationsInput | number
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    loc_id?: number
    loc_name: string
    loc_desc?: string | null
    loc_createdAt?: Date | string
    loc_updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    loc_id?: IntFieldUpdateOperationsInput | number
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinCreateInput = {
    bin_name: string
    bin_desc?: string | null
    bin_createdAt?: Date | string
    bin_updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutBinInput
  }

  export type BinUncheckedCreateInput = {
    bin_id?: number
    bin_name: string
    bin_desc?: string | null
    bin_createdAt?: Date | string
    bin_updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutBinInput
  }

  export type BinUpdateInput = {
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutBinNestedInput
  }

  export type BinUncheckedUpdateInput = {
    bin_id?: IntFieldUpdateOperationsInput | number
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutBinNestedInput
  }

  export type BinCreateManyInput = {
    bin_id?: number
    bin_name: string
    bin_desc?: string | null
    bin_createdAt?: Date | string
    bin_updatedAt?: Date | string
  }

  export type BinUpdateManyMutationInput = {
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinUncheckedUpdateManyInput = {
    bin_id?: IntFieldUpdateOperationsInput | number
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    store_name: string
    store_desc?: string | null
    store_createdAt?: Date | string
    store_updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    store_id?: number
    store_name: string
    store_desc?: string | null
    store_createdAt?: Date | string
    store_updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    store_id?: number
    store_name: string
    store_desc?: string | null
    store_createdAt?: Date | string
    store_updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    prod_name: string
    prod_desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    prod_id?: number
    prod_name: string
    prod_desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    prod_id?: IntFieldUpdateOperationsInput | number
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    prod_id?: number
    prod_name: string
    prod_desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    prod_id?: IntFieldUpdateOperationsInput | number
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    product: ProductCreateNestedOneWithoutInventoriesInput
    bin?: BinCreateNestedOneWithoutInventoriesInput
    location?: LocationCreateNestedOneWithoutInventoriesInput
    store?: StoreCreateNestedOneWithoutInventoriesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    store_id?: number | null
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    bin?: BinUpdateOneWithoutInventoriesNestedInput
    location?: LocationUpdateOneWithoutInventoriesNestedInput
    store?: StoreUpdateOneWithoutInventoriesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    store_id?: number | null
  }

  export type InventoryUpdateManyMutationInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryTransactionCreateInput = {
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateInput = {
    invtran_id?: number
    inv_id: number
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
  }

  export type InventoryTransactionUpdateInput = {
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateInput = {
    invtran_id?: IntFieldUpdateOperationsInput | number
    inv_id?: IntFieldUpdateOperationsInput | number
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateManyInput = {
    invtran_id?: number
    inv_id: number
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
  }

  export type InventoryTransactionUpdateManyMutationInput = {
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyInput = {
    invtran_id?: IntFieldUpdateOperationsInput | number
    inv_id?: IntFieldUpdateOperationsInput | number
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationOrderByRelevanceInput = {
    fields: LocationOrderByRelevanceFieldEnum | LocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationCountOrderByAggregateInput = {
    loc_id?: SortOrder
    loc_name?: SortOrder
    loc_desc?: SortOrder
    loc_createdAt?: SortOrder
    loc_updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    loc_id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    loc_id?: SortOrder
    loc_name?: SortOrder
    loc_desc?: SortOrder
    loc_createdAt?: SortOrder
    loc_updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    loc_id?: SortOrder
    loc_name?: SortOrder
    loc_desc?: SortOrder
    loc_createdAt?: SortOrder
    loc_updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    loc_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BinOrderByRelevanceInput = {
    fields: BinOrderByRelevanceFieldEnum | BinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BinCountOrderByAggregateInput = {
    bin_id?: SortOrder
    bin_name?: SortOrder
    bin_desc?: SortOrder
    bin_createdAt?: SortOrder
    bin_updatedAt?: SortOrder
  }

  export type BinAvgOrderByAggregateInput = {
    bin_id?: SortOrder
  }

  export type BinMaxOrderByAggregateInput = {
    bin_id?: SortOrder
    bin_name?: SortOrder
    bin_desc?: SortOrder
    bin_createdAt?: SortOrder
    bin_updatedAt?: SortOrder
  }

  export type BinMinOrderByAggregateInput = {
    bin_id?: SortOrder
    bin_name?: SortOrder
    bin_desc?: SortOrder
    bin_createdAt?: SortOrder
    bin_updatedAt?: SortOrder
  }

  export type BinSumOrderByAggregateInput = {
    bin_id?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    store_desc?: SortOrder
    store_createdAt?: SortOrder
    store_updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    store_desc?: SortOrder
    store_createdAt?: SortOrder
    store_updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    store_desc?: SortOrder
    store_createdAt?: SortOrder
    store_updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    prod_id?: SortOrder
    prod_name?: SortOrder
    prod_desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    prod_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    prod_id?: SortOrder
    prod_name?: SortOrder
    prod_desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    prod_id?: SortOrder
    prod_name?: SortOrder
    prod_desc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    prod_id?: SortOrder
  }

  export type EnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type BinNullableScalarRelationFilter = {
    is?: BinWhereInput | null
    isNot?: BinWhereInput | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type StoreNullableScalarRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type InventoryTransactionListRelationFilter = {
    every?: InventoryTransactionWhereInput
    some?: InventoryTransactionWhereInput
    none?: InventoryTransactionWhereInput
  }

  export type InventoryTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryProd_idBin_idLoc_idStore_idCompoundUniqueInput = {
    prod_id: number
    bin_id: number
    loc_id: number
    store_id: number
  }

  export type InventoryCountOrderByAggregateInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    inv_status?: SortOrder
    inv_createdAt?: SortOrder
    inv_updatedAt?: SortOrder
    checkedBin?: SortOrder
    bin_id?: SortOrder
    loc_id?: SortOrder
    store_id?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    bin_id?: SortOrder
    loc_id?: SortOrder
    store_id?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    inv_status?: SortOrder
    inv_createdAt?: SortOrder
    inv_updatedAt?: SortOrder
    checkedBin?: SortOrder
    bin_id?: SortOrder
    loc_id?: SortOrder
    store_id?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    inv_status?: SortOrder
    inv_createdAt?: SortOrder
    inv_updatedAt?: SortOrder
    checkedBin?: SortOrder
    bin_id?: SortOrder
    loc_id?: SortOrder
    store_id?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    inv_id?: SortOrder
    prod_id?: SortOrder
    inv_quantity?: SortOrder
    inv_restock?: SortOrder
    inv_trigger?: SortOrder
    bin_id?: SortOrder
    loc_id?: SortOrder
    store_id?: SortOrder
  }

  export type EnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumInvTranTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvTranType | EnumInvTranTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvTranType[]
    notIn?: $Enums.InvTranType[]
    not?: NestedEnumInvTranTypeFilter<$PrismaModel> | $Enums.InvTranType
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryTransactionOrderByRelevanceInput = {
    fields: InventoryTransactionOrderByRelevanceFieldEnum | InventoryTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryTransactionCountOrderByAggregateInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
    invtran_type?: SortOrder
    invtran_note?: SortOrder
    invtran_createdAt?: SortOrder
  }

  export type InventoryTransactionAvgOrderByAggregateInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
  }

  export type InventoryTransactionMaxOrderByAggregateInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
    invtran_type?: SortOrder
    invtran_note?: SortOrder
    invtran_createdAt?: SortOrder
  }

  export type InventoryTransactionMinOrderByAggregateInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
    invtran_type?: SortOrder
    invtran_note?: SortOrder
    invtran_createdAt?: SortOrder
  }

  export type InventoryTransactionSumOrderByAggregateInput = {
    invtran_id?: SortOrder
    inv_id?: SortOrder
    invtran_change?: SortOrder
  }

  export type EnumInvTranTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvTranType | EnumInvTranTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvTranType[]
    notIn?: $Enums.InvTranType[]
    not?: NestedEnumInvTranTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvTranType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvTranTypeFilter<$PrismaModel>
    _max?: NestedEnumInvTranTypeFilter<$PrismaModel>
  }

  export type InventoryCreateNestedManyWithoutLocationInput = {
    create?: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput> | InventoryCreateWithoutLocationInput[] | InventoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutLocationInput | InventoryCreateOrConnectWithoutLocationInput[]
    createMany?: InventoryCreateManyLocationInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput> | InventoryCreateWithoutLocationInput[] | InventoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutLocationInput | InventoryCreateOrConnectWithoutLocationInput[]
    createMany?: InventoryCreateManyLocationInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput> | InventoryCreateWithoutLocationInput[] | InventoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutLocationInput | InventoryCreateOrConnectWithoutLocationInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutLocationInput | InventoryUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InventoryCreateManyLocationInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutLocationInput | InventoryUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutLocationInput | InventoryUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput> | InventoryCreateWithoutLocationInput[] | InventoryUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutLocationInput | InventoryCreateOrConnectWithoutLocationInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutLocationInput | InventoryUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InventoryCreateManyLocationInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutLocationInput | InventoryUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutLocationInput | InventoryUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryCreateNestedManyWithoutBinInput = {
    create?: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput> | InventoryCreateWithoutBinInput[] | InventoryUncheckedCreateWithoutBinInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutBinInput | InventoryCreateOrConnectWithoutBinInput[]
    createMany?: InventoryCreateManyBinInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutBinInput = {
    create?: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput> | InventoryCreateWithoutBinInput[] | InventoryUncheckedCreateWithoutBinInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutBinInput | InventoryCreateOrConnectWithoutBinInput[]
    createMany?: InventoryCreateManyBinInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutBinNestedInput = {
    create?: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput> | InventoryCreateWithoutBinInput[] | InventoryUncheckedCreateWithoutBinInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutBinInput | InventoryCreateOrConnectWithoutBinInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutBinInput | InventoryUpsertWithWhereUniqueWithoutBinInput[]
    createMany?: InventoryCreateManyBinInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutBinInput | InventoryUpdateWithWhereUniqueWithoutBinInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutBinInput | InventoryUpdateManyWithWhereWithoutBinInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutBinNestedInput = {
    create?: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput> | InventoryCreateWithoutBinInput[] | InventoryUncheckedCreateWithoutBinInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutBinInput | InventoryCreateOrConnectWithoutBinInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutBinInput | InventoryUpsertWithWhereUniqueWithoutBinInput[]
    createMany?: InventoryCreateManyBinInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutBinInput | InventoryUpdateWithWhereUniqueWithoutBinInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutBinInput | InventoryUpdateManyWithWhereWithoutBinInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryCreateNestedManyWithoutStoreInput = {
    create?: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput> | InventoryCreateWithoutStoreInput[] | InventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput | InventoryCreateOrConnectWithoutStoreInput[]
    createMany?: InventoryCreateManyStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput> | InventoryCreateWithoutStoreInput[] | InventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput | InventoryCreateOrConnectWithoutStoreInput[]
    createMany?: InventoryCreateManyStoreInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput> | InventoryCreateWithoutStoreInput[] | InventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput | InventoryCreateOrConnectWithoutStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutStoreInput | InventoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: InventoryCreateManyStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutStoreInput | InventoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutStoreInput | InventoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput> | InventoryCreateWithoutStoreInput[] | InventoryUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutStoreInput | InventoryCreateOrConnectWithoutStoreInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutStoreInput | InventoryUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: InventoryCreateManyStoreInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutStoreInput | InventoryUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutStoreInput | InventoryUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type BinCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<BinCreateWithoutInventoriesInput, BinUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: BinCreateOrConnectWithoutInventoriesInput
    connect?: BinWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<LocationCreateWithoutInventoriesInput, LocationUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInventoriesInput
    connect?: LocationWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<StoreCreateWithoutInventoriesInput, StoreUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutInventoriesInput
    connect?: StoreWhereUniqueInput
  }

  export type InventoryTransactionCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput> | InventoryTransactionCreateWithoutInventoryInput[] | InventoryTransactionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryInput | InventoryTransactionCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryTransactionCreateManyInventoryInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput> | InventoryTransactionCreateWithoutInventoryInput[] | InventoryTransactionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryInput | InventoryTransactionCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryTransactionCreateManyInventoryInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type EnumInventoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InventoryStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ProductUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput
    upsert?: ProductUpsertWithoutInventoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoriesInput, ProductUpdateWithoutInventoriesInput>, ProductUncheckedUpdateWithoutInventoriesInput>
  }

  export type BinUpdateOneWithoutInventoriesNestedInput = {
    create?: XOR<BinCreateWithoutInventoriesInput, BinUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: BinCreateOrConnectWithoutInventoriesInput
    upsert?: BinUpsertWithoutInventoriesInput
    disconnect?: BinWhereInput | boolean
    delete?: BinWhereInput | boolean
    connect?: BinWhereUniqueInput
    update?: XOR<XOR<BinUpdateToOneWithWhereWithoutInventoriesInput, BinUpdateWithoutInventoriesInput>, BinUncheckedUpdateWithoutInventoriesInput>
  }

  export type LocationUpdateOneWithoutInventoriesNestedInput = {
    create?: XOR<LocationCreateWithoutInventoriesInput, LocationUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInventoriesInput
    upsert?: LocationUpsertWithoutInventoriesInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutInventoriesInput, LocationUpdateWithoutInventoriesInput>, LocationUncheckedUpdateWithoutInventoriesInput>
  }

  export type StoreUpdateOneWithoutInventoriesNestedInput = {
    create?: XOR<StoreCreateWithoutInventoriesInput, StoreUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutInventoriesInput
    upsert?: StoreUpsertWithoutInventoriesInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutInventoriesInput, StoreUpdateWithoutInventoriesInput>, StoreUncheckedUpdateWithoutInventoriesInput>
  }

  export type InventoryTransactionUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput> | InventoryTransactionCreateWithoutInventoryInput[] | InventoryTransactionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryInput | InventoryTransactionCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryTransactionCreateManyInventoryInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput> | InventoryTransactionCreateWithoutInventoryInput[] | InventoryTransactionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutInventoryInput | InventoryTransactionCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutInventoryInput | InventoryTransactionUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryTransactionCreateManyInventoryInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutInventoryInput | InventoryTransactionUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutInventoryInput | InventoryTransactionUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<InventoryCreateWithoutTransactionsInput, InventoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutTransactionsInput
    connect?: InventoryWhereUniqueInput
  }

  export type EnumInvTranTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvTranType
  }

  export type InventoryUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<InventoryCreateWithoutTransactionsInput, InventoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutTransactionsInput
    upsert?: InventoryUpsertWithoutTransactionsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutTransactionsInput, InventoryUpdateWithoutTransactionsInput>, InventoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumInventoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusFilter<$PrismaModel> | $Enums.InventoryStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryStatus | EnumInventoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryStatus[]
    notIn?: $Enums.InventoryStatus[]
    not?: NestedEnumInventoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InventoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryStatusFilter<$PrismaModel>
    _max?: NestedEnumInventoryStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInvTranTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvTranType | EnumInvTranTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvTranType[]
    notIn?: $Enums.InvTranType[]
    not?: NestedEnumInvTranTypeFilter<$PrismaModel> | $Enums.InvTranType
  }

  export type NestedEnumInvTranTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvTranType | EnumInvTranTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvTranType[]
    notIn?: $Enums.InvTranType[]
    not?: NestedEnumInvTranTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvTranType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvTranTypeFilter<$PrismaModel>
    _max?: NestedEnumInvTranTypeFilter<$PrismaModel>
  }

  export type InventoryCreateWithoutLocationInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    product: ProductCreateNestedOneWithoutInventoriesInput
    bin?: BinCreateNestedOneWithoutInventoriesInput
    store?: StoreCreateNestedOneWithoutInventoriesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutLocationInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    store_id?: number | null
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutLocationInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput>
  }

  export type InventoryCreateManyLocationInputEnvelope = {
    data: InventoryCreateManyLocationInput | InventoryCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutLocationInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutLocationInput, InventoryUncheckedUpdateWithoutLocationInput>
    create: XOR<InventoryCreateWithoutLocationInput, InventoryUncheckedCreateWithoutLocationInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutLocationInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutLocationInput, InventoryUncheckedUpdateWithoutLocationInput>
  }

  export type InventoryUpdateManyWithWhereWithoutLocationInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutLocationInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    inv_id?: IntFilter<"Inventory"> | number
    prod_id?: IntFilter<"Inventory"> | number
    inv_quantity?: IntFilter<"Inventory"> | number
    inv_restock?: IntFilter<"Inventory"> | number
    inv_trigger?: IntFilter<"Inventory"> | number
    inv_status?: EnumInventoryStatusFilter<"Inventory"> | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFilter<"Inventory"> | Date | string
    inv_updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    checkedBin?: BoolNullableFilter<"Inventory"> | boolean | null
    bin_id?: IntNullableFilter<"Inventory"> | number | null
    loc_id?: IntNullableFilter<"Inventory"> | number | null
    store_id?: IntNullableFilter<"Inventory"> | number | null
  }

  export type InventoryCreateWithoutBinInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    product: ProductCreateNestedOneWithoutInventoriesInput
    location?: LocationCreateNestedOneWithoutInventoriesInput
    store?: StoreCreateNestedOneWithoutInventoriesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutBinInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    loc_id?: number | null
    store_id?: number | null
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutBinInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput>
  }

  export type InventoryCreateManyBinInputEnvelope = {
    data: InventoryCreateManyBinInput | InventoryCreateManyBinInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutBinInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutBinInput, InventoryUncheckedUpdateWithoutBinInput>
    create: XOR<InventoryCreateWithoutBinInput, InventoryUncheckedCreateWithoutBinInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutBinInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutBinInput, InventoryUncheckedUpdateWithoutBinInput>
  }

  export type InventoryUpdateManyWithWhereWithoutBinInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutBinInput>
  }

  export type InventoryCreateWithoutStoreInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    product: ProductCreateNestedOneWithoutInventoriesInput
    bin?: BinCreateNestedOneWithoutInventoriesInput
    location?: LocationCreateNestedOneWithoutInventoriesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutStoreInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutStoreInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput>
  }

  export type InventoryCreateManyStoreInputEnvelope = {
    data: InventoryCreateManyStoreInput | InventoryCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutStoreInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutStoreInput, InventoryUncheckedUpdateWithoutStoreInput>
    create: XOR<InventoryCreateWithoutStoreInput, InventoryUncheckedCreateWithoutStoreInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutStoreInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutStoreInput, InventoryUncheckedUpdateWithoutStoreInput>
  }

  export type InventoryUpdateManyWithWhereWithoutStoreInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutStoreInput>
  }

  export type InventoryCreateWithoutProductInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin?: BinCreateNestedOneWithoutInventoriesInput
    location?: LocationCreateNestedOneWithoutInventoriesInput
    store?: StoreCreateNestedOneWithoutInventoriesInput
    transactions?: InventoryTransactionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutProductInput = {
    inv_id?: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    store_id?: number | null
    transactions?: InventoryTransactionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryCreateManyProductInputEnvelope = {
    data: InventoryCreateManyProductInput | InventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCreateWithoutInventoriesInput = {
    prod_name: string
    prod_desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutInventoriesInput = {
    prod_id?: number
    prod_name: string
    prod_desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutInventoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
  }

  export type BinCreateWithoutInventoriesInput = {
    bin_name: string
    bin_desc?: string | null
    bin_createdAt?: Date | string
    bin_updatedAt?: Date | string
  }

  export type BinUncheckedCreateWithoutInventoriesInput = {
    bin_id?: number
    bin_name: string
    bin_desc?: string | null
    bin_createdAt?: Date | string
    bin_updatedAt?: Date | string
  }

  export type BinCreateOrConnectWithoutInventoriesInput = {
    where: BinWhereUniqueInput
    create: XOR<BinCreateWithoutInventoriesInput, BinUncheckedCreateWithoutInventoriesInput>
  }

  export type LocationCreateWithoutInventoriesInput = {
    loc_name: string
    loc_desc?: string | null
    loc_createdAt?: Date | string
    loc_updatedAt?: Date | string
  }

  export type LocationUncheckedCreateWithoutInventoriesInput = {
    loc_id?: number
    loc_name: string
    loc_desc?: string | null
    loc_createdAt?: Date | string
    loc_updatedAt?: Date | string
  }

  export type LocationCreateOrConnectWithoutInventoriesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInventoriesInput, LocationUncheckedCreateWithoutInventoriesInput>
  }

  export type StoreCreateWithoutInventoriesInput = {
    store_name: string
    store_desc?: string | null
    store_createdAt?: Date | string
    store_updatedAt?: Date | string
  }

  export type StoreUncheckedCreateWithoutInventoriesInput = {
    store_id?: number
    store_name: string
    store_desc?: string | null
    store_createdAt?: Date | string
    store_updatedAt?: Date | string
  }

  export type StoreCreateOrConnectWithoutInventoriesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutInventoriesInput, StoreUncheckedCreateWithoutInventoriesInput>
  }

  export type InventoryTransactionCreateWithoutInventoryInput = {
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
  }

  export type InventoryTransactionUncheckedCreateWithoutInventoryInput = {
    invtran_id?: number
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutInventoryInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryTransactionCreateManyInventoryInputEnvelope = {
    data: InventoryTransactionCreateManyInventoryInput | InventoryTransactionCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutInventoriesInput = {
    update: XOR<ProductUpdateWithoutInventoriesInput, ProductUncheckedUpdateWithoutInventoriesInput>
    create: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoriesInput, ProductUncheckedUpdateWithoutInventoriesInput>
  }

  export type ProductUpdateWithoutInventoriesInput = {
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutInventoriesInput = {
    prod_id?: IntFieldUpdateOperationsInput | number
    prod_name?: StringFieldUpdateOperationsInput | string
    prod_desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinUpsertWithoutInventoriesInput = {
    update: XOR<BinUpdateWithoutInventoriesInput, BinUncheckedUpdateWithoutInventoriesInput>
    create: XOR<BinCreateWithoutInventoriesInput, BinUncheckedCreateWithoutInventoriesInput>
    where?: BinWhereInput
  }

  export type BinUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: BinWhereInput
    data: XOR<BinUpdateWithoutInventoriesInput, BinUncheckedUpdateWithoutInventoriesInput>
  }

  export type BinUpdateWithoutInventoriesInput = {
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BinUncheckedUpdateWithoutInventoriesInput = {
    bin_id?: IntFieldUpdateOperationsInput | number
    bin_name?: StringFieldUpdateOperationsInput | string
    bin_desc?: NullableStringFieldUpdateOperationsInput | string | null
    bin_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bin_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUpsertWithoutInventoriesInput = {
    update: XOR<LocationUpdateWithoutInventoriesInput, LocationUncheckedUpdateWithoutInventoriesInput>
    create: XOR<LocationCreateWithoutInventoriesInput, LocationUncheckedCreateWithoutInventoriesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutInventoriesInput, LocationUncheckedUpdateWithoutInventoriesInput>
  }

  export type LocationUpdateWithoutInventoriesInput = {
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateWithoutInventoriesInput = {
    loc_id?: IntFieldUpdateOperationsInput | number
    loc_name?: StringFieldUpdateOperationsInput | string
    loc_desc?: NullableStringFieldUpdateOperationsInput | string | null
    loc_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loc_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUpsertWithoutInventoriesInput = {
    update: XOR<StoreUpdateWithoutInventoriesInput, StoreUncheckedUpdateWithoutInventoriesInput>
    create: XOR<StoreCreateWithoutInventoriesInput, StoreUncheckedCreateWithoutInventoriesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutInventoriesInput, StoreUncheckedUpdateWithoutInventoriesInput>
  }

  export type StoreUpdateWithoutInventoriesInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateWithoutInventoriesInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    store_desc?: NullableStringFieldUpdateOperationsInput | string | null
    store_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutInventoryInput, InventoryTransactionUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryTransactionCreateWithoutInventoryInput, InventoryTransactionUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutInventoryInput, InventoryTransactionUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryTransactionScalarWhereInput = {
    AND?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    OR?: InventoryTransactionScalarWhereInput[]
    NOT?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    invtran_id?: IntFilter<"InventoryTransaction"> | number
    inv_id?: IntFilter<"InventoryTransaction"> | number
    invtran_change?: IntFilter<"InventoryTransaction"> | number
    invtran_type?: EnumInvTranTypeFilter<"InventoryTransaction"> | $Enums.InvTranType
    invtran_note?: StringNullableFilter<"InventoryTransaction"> | string | null
    invtran_createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
  }

  export type InventoryCreateWithoutTransactionsInput = {
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    product: ProductCreateNestedOneWithoutInventoriesInput
    bin?: BinCreateNestedOneWithoutInventoriesInput
    location?: LocationCreateNestedOneWithoutInventoriesInput
    store?: StoreCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutTransactionsInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    store_id?: number | null
  }

  export type InventoryCreateOrConnectWithoutTransactionsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutTransactionsInput, InventoryUncheckedCreateWithoutTransactionsInput>
  }

  export type InventoryUpsertWithoutTransactionsInput = {
    update: XOR<InventoryUpdateWithoutTransactionsInput, InventoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<InventoryCreateWithoutTransactionsInput, InventoryUncheckedCreateWithoutTransactionsInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutTransactionsInput, InventoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type InventoryUpdateWithoutTransactionsInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    bin?: BinUpdateOneWithoutInventoriesNestedInput
    location?: LocationUpdateOneWithoutInventoriesNestedInput
    store?: StoreUpdateOneWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutTransactionsInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateManyLocationInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    store_id?: number | null
  }

  export type InventoryUpdateWithoutLocationInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    bin?: BinUpdateOneWithoutInventoriesNestedInput
    store?: StoreUpdateOneWithoutInventoriesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutLocationInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutLocationInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateManyBinInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    loc_id?: number | null
    store_id?: number | null
  }

  export type InventoryUpdateWithoutBinInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    location?: LocationUpdateOneWithoutInventoriesNestedInput
    store?: StoreUpdateOneWithoutInventoriesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutBinInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutBinInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateManyStoreInput = {
    inv_id?: number
    prod_id: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
  }

  export type InventoryUpdateWithoutStoreInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    bin?: BinUpdateOneWithoutInventoriesNestedInput
    location?: LocationUpdateOneWithoutInventoriesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutStoreInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutStoreInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    prod_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateManyProductInput = {
    inv_id?: number
    inv_quantity?: number
    inv_restock?: number
    inv_trigger?: number
    inv_status?: $Enums.InventoryStatus
    inv_createdAt?: Date | string
    inv_updatedAt?: Date | string
    checkedBin?: boolean | null
    bin_id?: number | null
    loc_id?: number | null
    store_id?: number | null
  }

  export type InventoryUpdateWithoutProductInput = {
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin?: BinUpdateOneWithoutInventoriesNestedInput
    location?: LocationUpdateOneWithoutInventoriesNestedInput
    store?: StoreUpdateOneWithoutInventoriesNestedInput
    transactions?: InventoryTransactionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutProductInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: InventoryTransactionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutProductInput = {
    inv_id?: IntFieldUpdateOperationsInput | number
    inv_quantity?: IntFieldUpdateOperationsInput | number
    inv_restock?: IntFieldUpdateOperationsInput | number
    inv_trigger?: IntFieldUpdateOperationsInput | number
    inv_status?: EnumInventoryStatusFieldUpdateOperationsInput | $Enums.InventoryStatus
    inv_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inv_updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkedBin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    bin_id?: NullableIntFieldUpdateOperationsInput | number | null
    loc_id?: NullableIntFieldUpdateOperationsInput | number | null
    store_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InventoryTransactionCreateManyInventoryInput = {
    invtran_id?: number
    invtran_change: number
    invtran_type?: $Enums.InvTranType
    invtran_note?: string | null
    invtran_createdAt?: Date | string
  }

  export type InventoryTransactionUpdateWithoutInventoryInput = {
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateWithoutInventoryInput = {
    invtran_id?: IntFieldUpdateOperationsInput | number
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutInventoryInput = {
    invtran_id?: IntFieldUpdateOperationsInput | number
    invtran_change?: IntFieldUpdateOperationsInput | number
    invtran_type?: EnumInvTranTypeFieldUpdateOperationsInput | $Enums.InvTranType
    invtran_note?: NullableStringFieldUpdateOperationsInput | string | null
    invtran_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}