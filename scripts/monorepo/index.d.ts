export interface PackageJson {
  name: string;
  version: string;
  main: string;
  types?: string;
  module?: string;
  private?: boolean;
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  peerDependencies?: { [key: string]: string };
  [key: string]: any;
}

export interface PackageInfo {
  /** Package path relative to the project root */
  packagePath: string;
  /** package.json contents */
  packageJson: PackageJson;
}

export type AllPackageInfo = { [packageName: string]: PackageInfo };

export declare function findGitRoot(cwd?: string): string;

/**
 * Find all the dependencies (and their dependencies) within the repo for a specific package
 * (in the CWD when this was called)
 */
export declare function findRepoDeps(cwd?: string): PackageInfo[];

export declare function getAllPackageInfo(): AllPackageInfo;

/**
 * Determines whether a package is converged, based on its version.
 * @param packagePathOrJson optional different package path to run in OR previously-read package.json
 * (defaults to reading package.json from `process.cwd()`)
 * @returns true if it's a converged package (version >= 9)
 */
export declare function isConvergedPackage(packagePathOrJson?: string | PackageJson): boolean;
