export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      utility: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          title: string | null
          useCase: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string | null
          useCase?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string | null
          useCase?: string | null
        }
        Relationships: []
      }
      utility_html_css_js: {
        Row: {
          codeCss: string | null
          codeHtml: string | null
          codeJs: string | null
          codeTs: string | null
          created_at: string | null
          utility_id: string
        }
        Insert: {
          codeCss?: string | null
          codeHtml?: string | null
          codeJs?: string | null
          codeTs?: string | null
          created_at?: string | null
          utility_id: string
        }
        Update: {
          codeCss?: string | null
          codeHtml?: string | null
          codeJs?: string | null
          codeTs?: string | null
          created_at?: string | null
          utility_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'utility_html_css_js_utility_id_fkey'
            columns: ['utility_id']
            referencedRelation: 'utility'
            referencedColumns: ['id']
          }
        ]
      }
      utility_react: {
        Row: {
          codeComponent: string | null
          codeHook: string | null
          created_at: string | null
          utility_id: string
        }
        Insert: {
          codeComponent?: string | null
          codeHook?: string | null
          created_at?: string | null
          utility_id?: string
        }
        Update: {
          codeComponent?: string | null
          codeHook?: string | null
          created_at?: string | null
          utility_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
