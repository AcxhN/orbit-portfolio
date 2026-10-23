# 02 — Putting the code on GitHub

## What I did

```bash
gh repo create orbit-portfolio --public \
  --description "My personal website and creative playground — Next.js, React Three Fiber" \
  --source . --remote origin --push
```

The repo is live at https://github.com/AcxhN/orbit-portfolio.

I did **not** set up Vercel. You'll connect it in the browser (see "Your next step" below).

## Why

- GitHub is the off-site backup and the public home of the code (recruiters can browse it).
- Vercel deploys straight from GitHub: every push to `main` becomes a new live version
  of the site, and every other branch gets its own preview URL.

## New terms

- **git**: version control. It records snapshots ("commits") of your files so you
  can see history and undo mistakes.
- **Repository (repo)**: a project folder tracked by git, including its full history.
- **Commit**: one saved snapshot, with a message describing what changed.
- **Branch**: a named line of commits. `main` is the primary one.
- **Remote / origin**: a copy of the repo somewhere else (GitHub). `origin` is just the
  conventional name for "the main remote".
- **Push**: upload your new commits to the remote. **Pull**: download theirs.
- **gh**: GitHub's command-line tool. It can create repos, open PRs, and so on without the browser.

What each `gh repo create` flag does:

| Flag | Meaning |
| --- | --- |
| `--public` | Anyone can see it. |
| `--source .` | Use the existing local repo in this folder. |
| `--remote origin` | Register the new GitHub repo as `origin`. |
| `--push` | Push the current branch right away. |

## Your next step: Vercel (needs you in a browser)

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import `orbit-portfolio`. Vercel auto-detects Next.js, so leave every setting at its default.
3. Click Deploy. From then on, `git push` is all it takes to deploy.

## Try it yourself

1. Run `git log --oneline` to see the commit history, and compare it with the
   "commits" page on GitHub.
2. Run `gh repo view --web` to open the repo in your browser.
