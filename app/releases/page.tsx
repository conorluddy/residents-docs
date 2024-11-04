import { ReleaseItem, ReleaseStep } from "@/components/markup/releases";
import { Button } from "@/components/ui/button";
import { format, formatDistanceToNow } from "date-fns";
import { Metadata } from "next";

// Define types
type Release = {
  id: number;
  name: string;
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
  zipball_url: string;
  tarball_url: string;
};

type PageProps = {
  params: { slug: string[] };
};

// Revalidate every hour
export const revalidate = 3600;

async function fetchReleases() {
  try {
    const owner = "conorluddy";
    const repo = "Residents";
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases`,
      {
        headers: {
          // Optional: Add GitHub token to increase rate limit
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching releases:", error);
    return [];
  }
}

export default async function ReleasesPage() {
  const releases: Release[] = await fetchReleases();

  console.log({ releases });

  return (
    <div className="mx-auto max-w-[600px]">
      <h2 className="text-3xl mt-12 mb-12">Release History</h2>
      <div className="">
        <ReleaseStep>
          {releases.map((release) => (
            <ReleaseItem key={release.id}>
              <h2 className="text-2xl">
                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {release.name || release.tag_name}
                </a>
              </h2>

              <time className="font-mono text-xs">
                {format(new Date(release.published_at), "PPP  === ")}
                {formatDistanceToNow(new Date(release.published_at), {
                  addSuffix: true,
                })}
              </time>

              <div className="py-8 text-sm">
                <pre className="text-wrap">{release.body}</pre>
              </div>

              <footer className="flex gap-4 align-baseline items-baseline pb-32">
                <Button variant="secondary" size={"sm"}>
                  <a href={release.html_url}>Github link</a>
                </Button>
                <Button variant="default" size={"sm"}>
                  <a
                    href={release.zipball_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download ZIP
                  </a>
                </Button>
                <Button variant="default" size={"sm"}>
                  <a
                    href={release.tarball_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download TAR
                  </a>
                </Button>
              </footer>
            </ReleaseItem>
          ))}
        </ReleaseStep>
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Releases`,
    description: "View the latest releases and updates for Residents.",
  };
}
