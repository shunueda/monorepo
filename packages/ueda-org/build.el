(require 'org-static-blog)

(defvar base-dir (car argv))
(defvar out-dir (cadr argv))
(defvar publish-domain (caddr argv))

(setq org-static-blog-publish-title "Shun's org notes")
(setq org-static-blog-publish-url (format "https://%s/" publish-domain))
(setq org-static-blog-publish-directory (file-name-as-directory out-dir))
(setq org-static-blog-posts-directory (concat (file-name-as-directory base-dir) "posts/"))
(setq org-static-blog-drafts-directory (concat (file-name-as-directory out-dir) "drafts"))
(setq org-static-blog-enable-tags t)

(setq org-static-blog-index-front-matter
      (org-static-blog-render-post-content
       (concat (file-name-as-directory base-dir) "index.org")))

;; Custom plain index: a list of dated entries, no previews/tags/ellipsis.
(defun blog-post-list-item (post)
  (concat
   "<li>"
   "<span class=\"post-date\">"
   (format-time-string (org-static-blog-gettext 'date-format)
                       (org-static-blog-get-date post))
   "</span> "
   "<a href=\"" (org-static-blog-get-post-url post) "\">"
   (org-static-blog-get-title post)
   "</a></li>\n"))

(defun blog-post-list (posts)
  (concat "<ul class=\"post-list\">"
          (apply 'concat (mapcar #'blog-post-list-item posts))
          "</ul>"))

(defun blog-post-list-newest-first (posts)
  (blog-post-list
   (sort posts
         (lambda (x y)
           (time-less-p (org-static-blog-get-date y)
                        (org-static-blog-get-date x))))))

(defun org-static-blog-assemble-index ()
  (let ((post-filenames
         (sort (org-static-blog-get-post-filenames)
               (lambda (x y)
                 (time-less-p (org-static-blog-get-date y)
                              (org-static-blog-get-date x))))))
    (org-static-blog-with-find-file
     (concat-to-dir org-static-blog-publish-directory org-static-blog-index-file)
     (org-static-blog-template
      org-static-blog-publish-title
      (concat
       org-static-blog-index-front-matter
       (blog-post-list post-filenames))))))

;; Tag pages: dated entry lists, not full posts.
(defun org-static-blog-assemble-tags-archive-tag (tag)
  (concat
   "<h2 class=\"tags-title\">"
   (org-static-blog-gettext 'posts-tagged) " \"" (downcase (car tag)) "\":</h2>\n"
   (blog-post-list-newest-first (cdr tag))))

(defun org-static-blog-assemble-tags ()
  (org-static-blog-assemble-tags-archive)
  (dolist (tag (org-static-blog-get-tag-tree))
    (org-static-blog-with-find-file
     (concat-to-dir org-static-blog-publish-directory
                    (concat "tag-" (downcase (car tag)) ".html"))
     (org-static-blog-template
      org-static-blog-publish-title
      (concat
       "<h1 class=\"title\">"
       (org-static-blog-gettext 'posts-tagged) " \"" (car tag) "\":</h1>\n"
       (blog-post-list-newest-first (cdr tag)))))))

;; structure
(setq org-export-with-toc nil)
(setq org-export-with-section-numbers nil)

;; styling
(setq org-static-blog-page-header
      (concat
       "<meta name=\"viewport\" content=\"initial-scale=1,width=device-width,minimum-scale=1\">\n"
       "<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\" />\n"
       (mapconcat
        (lambda (file)
          (format "<link rel=\"prefetch\" href=\"%s\" />\n" file))
        (append
         (list
          org-static-blog-index-file
          org-static-blog-archive-file
          org-static-blog-tags-file
          org-static-blog-rss-file)
         (mapcar #'org-static-blog-get-post-public-path
                 (org-static-blog-get-post-filenames)))
        "")))

(setq org-static-blog-page-preamble
      (format "<div class=\"header\">
<a href=\"https://%s\">%s</a>
</div>" publish-domain org-static-blog-publish-title))

(setq org-static-blog-page-postamble
      (format "<div class=\"archive\">
<a href=\"%s\">%s</a> &middot; <a href=\"%s\">%s</a>
</div>"
              org-static-blog-archive-file (org-static-blog-gettext 'other-posts)
              org-static-blog-tags-file (org-static-blog-gettext 'tags)))

(org-static-blog-publish t)